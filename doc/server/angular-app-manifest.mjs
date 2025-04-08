
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
      "path": "chunk-XRE2LXSH.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/form/form.component.ts": [
    {
      "path": "chunk-EW4XFD4C.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/submissions/submissions.component.ts": [
    {
      "path": "chunk-SDP3UY36.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1794, hash: 'a1367e12015ab6b5acf4df04ca37378636a7ce319932e66dd92e5c7b03e4aecd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1219, hash: 'b71aa56704f2a12dc5be734499918a107b268e214d387dfe36b234276c79397f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5Y7KVWVT.css': {size: 5051191, hash: 'FCtL7uFvB8A', text: () => import('./assets-chunks/styles-5Y7KVWVT_css.mjs').then(m => m.default)}
  },
};
