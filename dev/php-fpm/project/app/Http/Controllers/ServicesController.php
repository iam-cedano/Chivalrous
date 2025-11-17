<?php 

namespace App\Http\Controllers;

use App\Usecases\Services\GetServicesUsecase;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class ServicesController extends Controller
{
    public function __construct(
        private GetServicesUsecase $getServicesUsecase
    ) {}

    public function searchByQuery(string $pageNumber = '1', string $count = '10', string $query ): JsonResponse {
        $page = $this->getServicesUsecase->query($query ) ;
    
        return response()->json($page);
    }

    public function searchAll(string $pageNumber = '1', string $count = '10'): JsonResponse {
        $page = $this->getServicesUsecase->allAsPage($pageNumber, $count);

        return response()->json($page);
    }

    public function getService(int $id) {
        $data = $this->getServicesUsecase->getService($id);
        
        return response()->json($data);
    }
}
