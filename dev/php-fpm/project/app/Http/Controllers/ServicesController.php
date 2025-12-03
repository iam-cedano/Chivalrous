<?php 

namespace Http\Controllers;

use Usecases\Services\BrowseServicesUsecase;
use Usecases\Services\SearchServicesUsecase;
use Usecases\Services\GetServiceDetailsUsecase;
use Illuminate\Http\JsonResponse;

class ServicesController extends Controller
{
    public function __construct(
        private BrowseServicesUsecase $browseServicesUsecase,
        private SearchServicesUsecase $searchServicesUsecase,
        private GetServiceDetailsUsecase $getServiceDetailsUsecase
    ) {}

    public function searchByQuery(string $pageNumber = '1', string $count = '10', string $query ): JsonResponse {
        $page = $this->searchServicesUsecase->query($query);
    
        return response()->json($page);
    }

    public function searchAll(string $pageNumber = '1', string $count = '10'): JsonResponse {
        $page = $this->browseServicesUsecase->allAsPage($pageNumber, $count);

        return response()->json($page);
    }

    public function getService(int $id): JsonResponse {
        $data = $this->getServiceDetailsUsecase->getService($id);
        
        return response()->json($data);
    }

    public function getServiceAndSources(int $id): JsonResponse {
        $data = $this->getServiceDetailsUsecase->getServiceAndSources($id);

        return response()->json($data);
    }
}
