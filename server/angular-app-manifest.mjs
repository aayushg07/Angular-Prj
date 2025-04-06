
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-Prj/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-QUUG4WVO.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/api-data/api-data.component.ts": [
    {
      "path": "chunk-OQSDZFJW.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/form/form.component.ts": [
    {
      "path": "chunk-W2QZKWAG.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/submissions/submissions.component.ts": [
    {
      "path": "chunk-BI4STGB7.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1806, hash: '4132da0e974ad83ab3e6e771ee65aeea228a7a46a56d09794f7fbd66d1d82c3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1231, hash: 'b616342263b0522c2ce83dc7ff62cad3ecacaa6887280e1d150d94651c6bcd91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5Y7KVWVT.css': {size: 5051191, hash: 'FCtL7uFvB8A', text: () => import('./assets-chunks/styles-5Y7KVWVT_css.mjs').then(m => m.default)}
  },
};
