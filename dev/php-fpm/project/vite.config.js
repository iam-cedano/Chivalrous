import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: [
                'resources/js/pages/admin/Admin.Users.tsx',
                'resources/js/pages/admin/Admin.Dashboard.tsx',
                'resources/js/pages/client/Client.Dashboard.tsx',
                'resources/js/pages/auth/Auth.Login.tsx',
                'resources/css/app.css'
            ],
            refresh: true,
        }),
        react()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./public/")
        }
    },
    server: {
        port: 5173,
        cors: true,
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
            port: 5173,
        },
    },
});