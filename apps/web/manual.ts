import { wipDevServerExpectHugeBreakingChanges } from "bun";

// Test imports
// import { onServerSideReload } from "bun-framework-rsc/client";
// import server from "bun-framework-rsc/server";

import { routes } from "./routes";

wipDevServerExpectHugeBreakingChanges({
	framework: {
		serverEntryPoint: "bun-framework-src/server",
		clientEntryPoint: "bun-framework-src/client",
		builtInModules: {},
		serverComponents: {},
		separateSSRGraph: true,
		serverRuntimeImportSource: "react-server-dom-webpack/server",
		serverRegisterClientReferenceExport: "react-server-dom-webpack/client",
		// },
		// reactFastRefresh: {
		// 	importSource: "react-refresh/runtime",
		// },
	},
	routes,
});
