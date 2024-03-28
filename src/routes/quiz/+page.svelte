<script>
	import { getRandomStratagem, verifyCommandMatch, getCommandFromName } from '$lib';

	$: stratagem_command = '';
	let stratagem_name = getRandomStratagem();
	/**
	 * @type {HTMLHeadingElement}
	 */
	let guess;
	let handicap = 0;
	let score = 'Score: 0';

	/**
	 * @param {string} input
	 */
	function handleKeyInput(input) {
		// @ts-ignore
		document.activeElement?.blur();
		switch (input) {
			case 'ArrowUp':
			case 'w':
			case 'W':
				stratagem_command += '⬆️';
				break;
			case 'ArrowDown':
			case 's':
			case 'S':
				stratagem_command += '⬇️';
				break;
			case 'ArrowLeft':
			case 'a':
			case 'A':
				stratagem_command += '⬅️';
				break;
			case 'ArrowRight':
			case 'd':
			case 'D':
				stratagem_command += '➡️';
				break;
			case ' ':
				evaluateCommand();
		}
	}

	function evaluateCommand() {
		const result = verifyCommandMatch(stratagem_name, stratagem_command);
		console.log(result);
		if (result) {
			correctGuess();
		} else {
			incorrectGuess();
		}
	}

	async function correctGuess() {
		handicap = 0;
		guess.classList.add('correct-guess');
		score = `Score: ${parseInt(score.split(' ')[1]) + stratagem_command.length / 2}`;
		stratagem_command = '';
		await new Promise((resolve) => setTimeout(resolve, 500));
		guess.classList.remove('correct-guess');
		stratagem_name = getRandomStratagem();
	}
	async function incorrectGuess() {
		handicap++;
		guess.classList.add('incorrect-guess');
		score = `Score: ${parseInt(score.split(' ')[1]) - 1}`;
		await new Promise((resolve) => setTimeout(resolve, 300));
		guess.classList.remove('incorrect-guess');
		stratagem_command = getCommandFromName(stratagem_name).substring(0, handicap);
	}
</script>

<svelte:window
	on:keydown={(event) => {
		handleKeyInput(event.key);
	}}
/>
<svelte:head>
	<title>Stratagem Quiz</title>
</svelte:head>
<header>
	<div>
		<h1>Stratagem Quiz</h1>
		<button
			on:click={() => {
				window.location.href = '/';
			}}>Emoji</button
		>
	</div>
</header>
<main>
	<h2>{score}</h2>
	<h3 bind:this={guess}>{stratagem_name}</h3>
	<hr />
	<div class="result-container">
		<span class="result">
			{stratagem_command}
		</span>
	</div>

	<div class="button-container">
		<button
			on:click={() => {
				handleKeyInput('w');
			}}><img src="up.svg" alt="up arrow" /></button
		>
		<button
			on:click={() => {
				handleKeyInput('a');
			}}><img src="left.svg" alt="left arrow" /></button
		>
		<button
			on:click={() => {
				handleKeyInput('s');
			}}><img src="down.svg" alt="down arrow" /></button
		>
		<button
			on:click={() => {
				handleKeyInput('d');
			}}><img src="right.svg" alt="right arrow" /></button
		>
	</div>
	<p>Press SPACEBAR to guess</p>
</main>
<footer>
	<p>
		Made by <a href="https://portfolio.navinate.com">Trey</a> | Not affiliated with Arrowhead Studios
	</p>
</footer>

<style>
	header {
		background-color: var(--translucent-white);
		position: fixed;
		width: 100vw;
		z-index: 1;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
	}
	header div {
		max-width: 760px;
		width: 100%;
		color: var(--yellow);
		text-align: center;
		padding: 1rem;
		font-family: 'Roboto Slab', serif;
		font-weight: 900;
		display: grid;
		grid-template-columns: 1fr 8fr 1fr;
	}
	header h1 {
		grid-column: 2;
	}
	header button {
		color: var(--yellow);
		background-color: var(--blue);
		font-size: 1.3rem;
	}
	main {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 760px;
		background-color: var(--blue);
		height: 100vh;
		color: var(--white);
	}
	h2 {
		min-height: 1.5rem;
		color: var(--white);
		font-size: 2rem;
	}
	h3 {
		min-height: 1.5rem;
		color: var(--white);
	}
	hr {
		width: 50%;
		border-color: var(--white);
	}
	.result-container {
		font-size: 2rem;
		padding: 1rem;
		border-radius: 0.5rem;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.1);
		margin: 1rem;
		min-width: 80%;
		height: 4.5rem;
		letter-spacing: 0.5rem;
		color: var(--white);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		border: none;
		border-radius: 0.5rem;
		background-color: var(--yellow);
		color: var(--blue);
		font-family: 'Roboto Slab', serif;
		font-weight: 900;
		text-align: center;
		transition-duration: 0.1s;

		display: grid;
		place-items: center;
	}

	.button-container {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'. up .'
			'left down right';
		gap: 0.5rem;
		aspect-ratio: 3/2;
	}
	.button-container button {
		padding: 0.25rem;
		width: 5.5rem;
		aspect-ratio: 1;
		font-size: 2rem;
	}
	.button-container button:nth-child(1) {
		grid-area: up;
	}
	.button-container button:nth-child(2) {
		grid-area: left;
	}
	.button-container button:nth-child(3) {
		grid-area: down;
	}
	.button-container button:nth-child(4) {
		grid-area: right;
	}

	button:hover {
		transform: scale(1.1);
	}
	button:active {
		transform: scale(0.9);
	}

	footer {
		font-family: 'Roboto Slab', serif;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--translucent-white);
		backdrop-filter: blur(10px);
		color: var(--yellow);
		text-align: center;
		padding: 1rem;
		font-size: 1rem;
	}

	footer a {
		color: var(--blue);
	}

	:global(.correct-guess) {
		color: lime;
		text-shadow: 0px 0px 10px lime;
	}
	:global(.incorrect-guess) {
		color: red;
		text-shadow: 0px 0px 10px red;
		animation: incorrect-guess 0.1s;
	}

	@keyframes incorrect-guess {
		0% {
			transform: translate(0px, 0px);
		}
		15% {
			transform: translate(10px, 5px);
		}
		30% {
			transform: translate(-10px, -5px);
		}
		45% {
			transform: translate(0px, 0px);
		}
		60% {
			transform: translate(10px, -5px);
		}
		85% {
			transform: translate(-10px, 5px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
</style>
