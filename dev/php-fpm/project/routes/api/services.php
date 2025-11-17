<?php
use App\Http\Controllers\ServicesController;

Route::controller(ServicesController::class)->group(function() {
    Route::get('/services/{id}', 'getServiceAndSources')->name('api.services.id');
    
    Route::get('/services', function(ServicesController $serviceController) {
        $request = request();
        
        $pageNumber = $request->get('p', '1');
        $count = '10';

        // If the request is a query.
        if ( $request->has('q') && !empty( $request->input('q') ) ) {
            $query = $request->input('q');

            return $serviceController->searchByQuery();
        } 

        return $serviceController->searchAll($pageNumber, $count);
    })->name('api.services');

});