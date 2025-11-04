<?php

namespace Infrastructure\Services;

use App\Models\Service;
use App\Ports\Services\GetServicesPort;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class ServiceLocalAdapter implements GetServicesPort {
    public function all(): Collection {
        $bunchOfServices = Service::all( ['name', 'short_description']);

        return $bunchOfServices;
    }
    
    public function query(string $query): Collection {
        return null;
    }

    public function queryAsPage(string $pageNumber, string $count, string $query): array {
        // ToDo: To use $query param in this method.
        $page = Service::paginate($count, ['name', 'short_description'], 'page', $pageNumber);

        return $page->all();
    }

    public function allAsPage(string $pageNumber, string $count = '10'): array {
        $idCache = Config::get('cache-keys.services');

        $servicesInCacheAsJson = Cache::get( $idCache);
         
        if (! $servicesInCacheAsJson ) {
            $services = Service::query()->select(['id', 'name', 'short_description', 'logo_uri', 'minimum_quantity', 'maximum_quantity'] )->get();

            Cache::set($idCache, json_encode($services->toArray()), 20);

            return $services->forPage($pageNumber, $count)->values()->toArray();
        }

        $services = collect(json_decode($servicesInCacheAsJson))
                           ->forPage($pageNumber, $count)
                           ->values()
                           ->toArray();

        return $services;
    }   
}