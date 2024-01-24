import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//http:localhost:5000
 export default defineConfig({
    server: {
        Proxy: {
            '/api':'http://localhost:5000'
        }
    },
    plugins: [react()]
 })