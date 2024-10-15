import { wipDevServerExpectHugeBreakingChanges } from "bun";

wipDevServerExpectHugeBreakingChanges({
	framework: {
		serverEntryPoint: "./bun-framework-rsc/server.tsx",
		clientEntryPoint: "./bun-framework-rsc/client.tsx",
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
	routes: [
		{ pattern: "/", entrypoint: "./routes/index.tsx" },
		{ pattern: "/second", entrypoint: "./routes/second.tsx" },
	],
});
