<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
        }
        .login-container {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .input-group {
            margin-bottom: 1rem;
        }
        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
        }
        .input-group input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .login-button {
            width: 100%;
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            font-size: 1rem;
            cursor: pointer;
        }
        .login-button:hover {
            background-color: #0056b3;
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

    <div class="login-container">
        <form action="{{ route('auth.web') }}" method="post">
        @csrf
            <h2>Login</h2>
            <div class="input-group">
                <label for="name">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-button">Log In</button>
        </form>
    </div>

</body>
</html>