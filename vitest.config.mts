import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom', // Use jsdom for DOM testing
    globals: true, // If you want Vitest globals like describe, it, expect, etc.
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      exclude: [
        'next.config.mjs',
        'webpack.widget.config.js',
        'next-env.d.ts',
        'vitest.config.ts',
        'src/app/theme.tsx',
        'src/app/react-query-wrapper.tsx',
        '.next/**',
        'public/**',
        'src/widgets/**',
        'src/types/**',
        'src/fonts/**',
        'src/api/mocks/**',
      ],
    },
  },
});
