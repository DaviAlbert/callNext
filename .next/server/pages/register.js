const CHUNK_PUBLIC_PATH = "server/pages/register.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_5cebb5._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__d66cf6._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/register/index.page.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.page.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.page.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
