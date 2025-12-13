<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\BalanceModel;
class BalanceFactory extends Factory
{
    protected $model = BalanceModel::class;

    public function definition(): array
    {
        return [
            'amount' => 0
        ];
    }
}
