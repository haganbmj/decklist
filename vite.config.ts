import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
    plugins: [vue()],
    define: {
        "__BUILD_SHA__": `"local"`,
        "__BUILD_TIMESTAMP__": `"${new Date().toISOString()}"`,
    },
    css: {
        postcss: {
            plugins: [
                postcssNesting,
            ],
        },
    },
});
