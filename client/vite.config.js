import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/congif/
export default defineConfig ({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        //Set Vite client-side development server to proxy API requests to our server-side
        proxy: {
            '/graphql': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure:false,
            },
        }
    }
})
