<?php
namespace Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'source_service_id' => 'required|integer:strict',
            'quantity' => 'required|integer:strict',
        ];
    }
}
