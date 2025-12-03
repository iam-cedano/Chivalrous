<?php

namespace Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class ClientDetectionServiceProvider extends ServiceProvider
{
    public function register(): void
    {
    }
    public function boot(): void
    {
        Request::macro('isRestClient', function (): bool {
            $ua = (string) ($this->header('User-Agent') ?? $this->server('HTTP_USER_AGENT') ?? '');

            static $webRegex = null;
            static $restRegex = null;

            if ($webRegex === null || $restRegex === null) {
                $webSignatures = [
                    'mozilla',
                    'chrome',
                    'safari',
                    'firefox',
                    'edge',
                    'trident',
                    'msie',
                    'applewebkit',
                    'opr/',
                    'edg/',  
                ];

                $restSignatures = [
                    'postmanruntime',
                    'postman',
                    'insomnia',
                    'curl',
                    'httpie',
                    'okhttp',
                    'python-requests',
                    'guzzle',
                    'libwww-perl',
                    'winhttp',
                    'go-http-client',
                    'axios',
                    'php',
                    'java/',
                ];

                $escape = static function (array $items): string {
                    return implode('|', array_map(static fn($s) => preg_quote($s, '/'), $items));
                };

                $webRegex  = '/' . $escape($webSignatures) . '/i';
                $restRegex = '/' . $escape($restSignatures) . '/i';
            }

            if ($ua === '') {
                return true;
            }

            if (preg_match($webRegex, $ua) === 1) {
                return false;
            }

            if (preg_match($restRegex, $ua) === 1) {
                return true;
            }

            return true;
        });

        Request::macro('clientType', function (): string {
            return $this->isRestClient() ? 'rest' : 'web';
        });
    }
}
