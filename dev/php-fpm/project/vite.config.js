import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: [
                'resources/js/pages/admin/Admin.Users.tsx',
                'resources/js/pages/admin/Admin.Dashboard.tsx',
                'resources/js/pages/client/Client.Home.tsx',
                'resources/js/pages/auth/Auth.Login.tsx',
                'resources/css/app.css',
                'resources/fonts/Lobster-Regular.woff',
                'resources/fonts/Lobster-Regular.woff2',
                'resources/fonts/Montserrat-Bold.woff',
                'resources/fonts/Montserrat-Bold.woff2',
                'resources/fonts/Montserrat-Regular.woff',
                'resources/fonts/Montserrat-Regular.woff2'
            ],
            refresh: true,
        }),
        viteStaticCopy({
          targets: [
            { src: 'resources/assets/*', dest: 'assets/'  }
          ],
        }),
        react()
    ],
    resolve: {
    alias: [
        { find: "@/types/client", replacement: path.resolve(__dirname, "resources/js/pages/client/types") },
        { find: "@/data/client", replacement: path.resolve(__dirname, "resources/js/pages/client/data") },
        { find: "@", replacement: path.resolve(__dirname, "resources/js") },
    ],
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