

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D5AIL86M.js","_app/immutable/chunks/Dlc_SMu7.js","_app/immutable/chunks/CJYn40_N.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/2.FklCH5OQ.css"];
export const fonts = [];
