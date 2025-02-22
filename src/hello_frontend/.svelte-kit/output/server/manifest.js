export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ic-assets.json5","favicon.ico","logo2.svg"]),
	mimeTypes: {".json5":"application/json5",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DGXwai-4.js",app:"_app/immutable/entry/app.BFhxRB6a.js",imports:["_app/immutable/entry/start.DGXwai-4.js","_app/immutable/chunks/BlX-puMK.js","_app/immutable/chunks/Dlc_SMu7.js","_app/immutable/entry/app.BFhxRB6a.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/Dlc_SMu7.js","_app/immutable/chunks/CJYn40_N.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
