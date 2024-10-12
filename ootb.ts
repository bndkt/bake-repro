import { wipDevServerExpectHugeBreakingChanges } from "bun";

import { routes } from "./routes";

wipDevServerExpectHugeBreakingChanges({
	framework: "react-server-components",
	routes: [
		{ pattern: "/", entrypoint: "./routes/index.tsx" },
		{ pattern: "/second", entrypoint: "./routes/second.tsx" },
	],
});
