<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Chivalrous | Authentication</title>

    @viteReactRefresh
    @vite('resources/js/pages/auth/Auth.Login.tsx')
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>