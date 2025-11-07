<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Chivalrous SMM Panel">

    <title>Chivalrous | Authentication</title>

    @vite('resources/css/app.css')

    @viteReactRefresh
    @vite('resources/js/pages/auth/Auth.Login.tsx')

    <link rel="icon" type="image/png" href="/build/assets/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/build/assets/favicon.svg" />
    <link rel="shortcut icon" href="/build/assets/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/build/assets/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Chivalrous" />
    <link rel="manifest" href="/build/assets/site.webmanifest" />

  </head>
  <body>
    <div id="app"></div>
  </body>
</html>