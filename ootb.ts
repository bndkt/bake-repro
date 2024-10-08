import { wipDevServerExpectHugeBreakingChanges } from "bun";

import { routes } from "./routes";

wipDevServerExpectHugeBreakingChanges({
	framework: "react-server-components",
	routes,
});
