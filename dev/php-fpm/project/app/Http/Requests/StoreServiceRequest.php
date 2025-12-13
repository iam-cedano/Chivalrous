<?php
namespace Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreServiceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'service_id' => 'required|integer:strict',
            'source_service_id' => 'required|integer:strict',
            'quantity' => 'required|integer:strict',
        ];
    }

    protected function failedValidation(Validator $validator): void
    {
        throw new HttpResponseException(response()->json([
            'message' => 'Invalid request data.'
        ], 422));
    }
}
