const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__5635fb._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.page.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
