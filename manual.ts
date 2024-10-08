import { wipDevServerExpectHugeBreakingChanges } from "bun";

import { routes } from "./routes";

wipDevServerExpectHugeBreakingChanges({
	framework: {
		serverEntryPoint: "./bun-framework-src/server.tsx",
		clientEntryPoint: "./bun-framework-src/client.tsx",
		builtInModules: {},
		serverComponents: {
			separateSSRGraph: true,
			serverRuntimeImportSource: "react-server-dom-webpack/server",
			serverRegisterClientReferenceExport: "react-server-dom-webpack/client",
		},
		// reactFastRefresh: {
		// 	importSource: "react-refresh/runtime",
		// },
	},
	routes,
});
