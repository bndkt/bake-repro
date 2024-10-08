import type { Bake } from "bun";

export const routes: Bake.Options["routes"] = [
	{ pattern: "/", entrypoint: "./routes/index.tsx" },
	{ pattern: "/second", entrypoint: "./routes/second.tsx" },
];
