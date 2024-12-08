import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    host: "localhost", // Указывает на localhost
    port: 3000, // Указывает порт, на котором будет запускаться сервер
    strictPort: true, // Обеспечивает использование именно указанного порта
  },
});
