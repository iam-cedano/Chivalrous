<?php
namespace Http\Controllers;

use Models\SourceServiceModel;
use Http\Requests\StoreServiceRequest;
use Models\ServiceModel;
use Models\UserModel;
use Models\ItemModel;
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

       $user = auth()->user();

       $model = UserModel::with(['cart'])->findOrFail($user->id);

       $sourceService = SourceServiceModel::where('id', $data['source_service_id'])
           ->where('service_id', $data['service_id'])
           ->firstOrFail();
       
    //    ItemModel::create([
    //     'order_id' => null,
    //     'cart_id' => $model->cart()->id,
    //     'service_id' => $data['service_id'],
    //     'source_service_id' => $data['source_service_id'],
    //     'quantity' => $data['quantity'],
    //     ''
    //    ]);

       return response()->json($sourceService);
    }
}
