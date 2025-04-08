
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-EFCN7OLD.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/api-data/api-data.component.ts": [
    {
      "path": "chunk-YBCSO3FP.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/form/form.component.ts": [
    {
      "path": "chunk-NPMGUDWL.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/submissions/submissions.component.ts": [
    {
      "path": "chunk-627S7Y6J.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1794, hash: '96b93da18ad04963a860cdf6b20c44cd881c2d64f274268bf8b48ba95783b19b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1219, hash: '5687c8b4b62bdf0a55f9e57d2cf05d5d5f8a8d8f23298d3d216060d51cbf620b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5Y7KVWVT.css': {size: 5051191, hash: 'FCtL7uFvB8A', text: () => import('./assets-chunks/styles-5Y7KVWVT_css.mjs').then(m => m.default)}
  },
};
