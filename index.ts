import { wipDevServerExpectHugeBreakingChanges } from "bun";

wipDevServerExpectHugeBreakingChanges({
	// for framework authors, attach your framework
	// via the interface described in `bake.d.ts`
	framework: "react-server-components",
	// framework: {
	// 	serverEntryPoint: "./bun-framework-src/server.tsx",
	// 	clientEntryPoint: "./bun-framework-src/client.tsx",
	// 	builtInModules: {},
	// 	serverComponents: {
	// 		separateSSRGraph: true,
	// 		serverRuntimeImportSource: "react-server-dom-webpack/server",
	// 		serverRegisterClientReferenceExport: "react-server-dom-webpack/client",
	// 	},
	// 	// reactFastRefresh: {
	// 	// 	importSource: "react-refresh/runtime",
	// 	// },
	// },
	// routes must be statically known so production
	// builds can prepare all required assets.
	routes: [
		{ pattern: "/", entrypoint: "./routes/index.tsx" },
		// { pattern: "/second", entrypoint: "./second.tsx" },
	],
});
