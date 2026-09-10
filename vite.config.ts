import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

/**
 * Vite 2 serves react/jsx-runtime.js as a native ESM module, but that file is
 * CommonJS (`module.exports`). Prebuilt kalki-ui chunks import it and crash
 * the browser with "module is not defined". Rewrite those entries to ESM.
 */
function esmJsxRuntime(): Plugin {
  const shim = `
import React from ${JSON.stringify('react')};
const getChildren = (props) => (props == null ? undefined : props.children);
const getRest = (props) => {
  if (props == null) return {};
  const { children, ...rest } = props;
  return rest;
};
export const Fragment = React.Fragment;
export function jsx(type, props, key) {
  const rest = getRest(props);
  if (key !== undefined && key !== null) rest.key = key;
  const children = getChildren(props);
  return Array.isArray(children)
    ? React.createElement(type, rest, ...children)
    : React.createElement(type, rest, children);
}
export const jsxs = jsx;
export const jsxDEV = jsx;
`.trim();

  const isJsxRuntime = (id: string) => {
    const file = id.split('?')[0].replace(/\\/g, '/');
    return file.endsWith('/react/jsx-runtime.js') || file.endsWith('/react/jsx-dev-runtime.js');
  };

  return {
    name: 'esm-jsx-runtime',
    enforce: 'pre',
    transform(code, id) {
      if (!isJsxRuntime(id)) return null;
      return { code: shim, map: null };
    },
  };
}

export default defineConfig({
  plugins: [esmJsxRuntime(), react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'kalki-ui-docs': 'kalki-ui-docs',
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    exclude: ['kalki-ui'],
  },
  server: {
    port: 8847,
    open: true,
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
    watch: {
      usePolling: true,
      interval: 50,
    },
  },
});
