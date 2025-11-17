<?php
use App\Http\Controllers\ServicesController;

Route::controller(ServicesController::class)->group(function() {
    Route::get('/services/{id}', 'getService')->name('api.services.id');
    
    Route::get('/services', function(ServicesController $serviceController) {
        $request = request();

        // If the request is a query
        if ( $request->has('q') ) {
            $pageNumber = $request->input('p', '1');
            $count = '10';
            
            $query = $request->input('q');

            if ( empty($query) ) {
                return $serviceController->searchAll($pageNumber, $count);
            }

            return $serviceController->searchByQuery($pageNumber, $count, $query);
        }

        return response()->json([
            'status' => 400,
            'message' => 'There was something wrong in your request.'
        ], 400);
    })->name('api.services');

});