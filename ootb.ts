import { wipDevServerExpectHugeBreakingChanges } from "bun";

wipDevServerExpectHugeBreakingChanges({
	framework: "react-server-components",
	routes: [
		{ pattern: "/", entrypoint: "./routes/index.tsx" },
		{ pattern: "/second", entrypoint: "./routes/second.tsx" },
	],
});
