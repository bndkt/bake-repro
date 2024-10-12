"use client";

import { useState } from "react";

import { log } from "../functions/log";

export const Counter = ({ start }: { start: number }) => {
	const [counter, setCounter] = useState(start);

	const increase = () => {
		console.log("increase");
		setCounter(counter + 1);
	};

	return (
		<div>
			<button type="submit" onClick={increase}>
				Counter: {counter}
			</button>
			<button type="submit" onClick={() => log(counter.toString())}>
				Log on server
			</button>
		</div>
	);
};
