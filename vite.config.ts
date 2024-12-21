import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: "./",
    resolve: {
        alias: {
            "@Features": "/src/features",
            "@Shared": "/src/shared",
            "@Routes": "/src/routes",
            "@Home": "/src/features/home",
            "@StarshipsList": "/src/features/starshipsList",
            "@StarshipDetails": "/src/features/starshipDetails",
            "@Auth": "/src/features/auth",
            "@Assets": "/src/assets",
        },
    },
});
