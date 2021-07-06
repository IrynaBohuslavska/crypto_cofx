
shadow.cljs.devtools.client.env.module_loaded('app');

try { cypto.core.init(); } catch (e) { console.error("An error occurred when calling (cypto.core/init)"); throw(e); }