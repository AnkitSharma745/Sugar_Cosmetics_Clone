import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint2';
export default defineConfig({
    plugins: [react(), eslint({ fix: true })],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
