<?php

namespace Infrastructure\Local\Services;

use App\Models\ServiceModel as Service;
use App\Ports\Services\BrowseServicesPort;
use App\Ports\Services\SearchServicesPort;
use App\Ports\Services\GetServiceDetailsPort;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class ServiceLocalAdapter implements BrowseServicesPort, SearchServicesPort, GetServiceDetailsPort {
    public function all(): Collection {
        $bunchOfServices = Service::all( ['name', 'short_description']);

        return $bunchOfServices;
    }
    
    public function query(string $query): Collection {
        return [];
    }

    public function queryAsPage(string $pageNumber, string $count, string $query): array {
        // ToDo: To use $query param in this method.
        $page = Service::paginate($count, ['name', 'short_description'], 'page', $pageNumber);

        return $page->all();
    }

    public function allAsPage(string $pageNumber, string $count = '10'): array {
        $idCache = Config::get('cache-keys.services');

        $servicesInCache = Cache::get( $idCache);
         
        if (! $servicesInCache ) {
            $services = Service::query()->select(['id', 'name', 'short_description', 'minimum_quantity', 'maximum_quantity'] )->get();

            Cache::set($idCache, json_encode($services->toArray()), 20);

            return $services->forPage($pageNumber, $count)->values()->toArray();
        }

        $services = collect(json_decode($servicesInCache))
                           ->forPage($pageNumber, $count)
                           ->values()
                           ->toArray();

        return $services;
    }   

    public function getService(int $id): array {
        $keyCache = Config::get('cache-keys.service-') . $id;
        
        $serviceInCache = Cache::get($keyCache);

        if ( $serviceInCache ) {
            return json_decode($serviceInCache, true);
        }

        $service = Service::find($id, ['name', 'long_description', 'minimum_quantity', 'maximum_quantity']);

        if ($service == null) {
            Cache::delete($keyCache);

            return [];
        };

        $servicePayload = $service->toArray();

        Cache::set($keyCache, $servicePayload, 600);

        return $servicePayload;
    }

    public function getServiceAndSources(int $id): array {
        if (! is_numeric($id) ) {
            return [];
        }

        $keyCache = Config::get('cache-keys.service-and-source-') . $id;

        $serviceInCache = Cache::get($keyCache);

        if ($serviceInCache) {
            # return json_decode($serviceInCache, true);
        }

        $service = Service::query()
            ->with([
            'sources' => function ($query) {
                $query->select(['id', 'country_abbreviation','service_id', 'warranty', 'warranty_text', 'name', 'price_per_thousand', 'status']);
            },
            'details' => function ($query) {
                $query->select(['id', 'content', 'service_id']);
            }
            ])
            ->find($id, ['id', 'name','long_description', 'minimum_quantity', 'maximum_quantity']);

        if ($service == null) {
            Cache::delete($keyCache);

            return [];
        }

        $servicePayload = $service->toArray();
        $groupedSources = collect($servicePayload['sources'] ?? [])
            ->groupBy('name')
            ->map(callback: function ($sources) {
                return $sources->groupBy('country_abbreviation')->toArray();
            });

        $servicePayload['sources'] = $groupedSources;

        Cache::set($keyCache, json_encode($servicePayload), 600);

        return $servicePayload;
    }
}