<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chivalrous - SMM Panel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            text-align: center;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        img {
            max-width: 200px;
            height: auto;
            margin-bottom: 20px;
        }

        h1 {
            color: #3498db;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
        }

        .prices {
            margin-top: 30px;
        }

        .price-item {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #eee;
        }
    </style>
    <link rel="icon" type="image/png" href="/build/assets/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/build/assets/favicon.svg" />
    <link rel="shortcut icon" href="/build/assets/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/build/assets/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Chivalrous" />
    <link rel="manifest" href="/build/assets/site.webmanifest" />

</head>
<body>
    <div class="container">
        <img src="{{ asset('assets/transparent-brand.png') }}" alt="Chivalrous - SMM Panel Logo">
        <h1>Welcome to Chivalrous - SMM Panel</h1>
        <p>Your premier social media marketing solution. Experience top-tier SMM services with our panel.</p>

        <div class="prices">
            <h2>Our Services & Prices</h2>
            <div class="price-item">
                <h3>Instagram Followers</h3>
                <p>1000 Followers: $15.99</p>
            </div>
            <div class="price-item">
                <h3>Facebook Likes</h3>
                <p>1000 Likes: $8.49</p>
            </div>
            <div class="price-item">
                <h3>Twitter Retweets</h3>
                <p>1000 Retweets: $6.79</p>
            </div>
        </div>

        {{ route('auth.web')  }}
    </div>
</body>
</html>