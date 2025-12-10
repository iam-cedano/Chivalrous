<?php
namespace Http\Controllers;

use Http\Requests\StoreServiceRequest;
use Usecases\Cart\AddItemUsecase;
use Usecases\Cart\GetCurrentCartUsecase;

class CartController extends Controller
{
    public function __construct(
        private GetCurrentCartUsecase $getCurrentCartUsecase,
        private AddItemUsecase $addItemusecase
    ) {}

    public function getCart() {
        $cart = $this->getCurrentCartUsecase->execute();

        return response()->json($cart->toArray());
    }

    public function addItem(StoreServiceRequest $request) {
       $data = $request->validated();

       return response()->json($data);
    }
}
