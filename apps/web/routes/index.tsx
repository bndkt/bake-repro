import { Counter } from "../components/Counter";

export default function Index() {
	return (
		<div>
			<h1>Index</h1>
			<Counter start={3} />
			<a href="/second">Second</a>
		</div>
	);
}
