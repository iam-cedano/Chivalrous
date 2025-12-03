<?php
namespace Domains;
abstract class DTO {
    abstract function toArray(): array;
    abstract function toJSON(): string;
}