<script>
	import { handleCommandIdentification } from '$lib';

	$: stratagem_command = '';
	$: stratagem_name = '';

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
				copyEmojiResult();
		}
		stratagem_name = handleCommandIdentification(stratagem_command);
	}

	function copyEmojiResult() {
		navigator.clipboard.writeText(stratagem_command);
		stratagem_command = '';
	}
</script>

<svelte:window
	on:keydown={(event) => {
		handleKeyInput(event.key);
	}}
/>
<svelte:head>
	<title>Stratagem ➡️ Emoji</title>
</svelte:head>
<header>
	<h1>Stratagem ➡️ Emojis</h1>
</header>
<main>
	<h3>{stratagem_name}</h3>
	<hr />
	<div class="result-container">
		<span class="result">
			{stratagem_command}
		</span>
		<button class="copy-button" on:click={copyEmojiResult}>
			<img src="copy.svg" alt="copy button" />
		</button>
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
	<p>Press SPACEBAR to copy entry</p>
</main>
<footer>
	<p>
		Made by <a href="https://portfolio.navinate.com">Trey</a> | Not affiliated with Arrowhead Studios
	</p>
</footer>

<style>
	header {
		background-color: var(--translucent-white);
		color: #efd83a;
		text-align: center;
		padding: 1rem;
		font-family: 'Roboto Slab', serif;
		font-weight: 900;
		position: fixed;
		width: 100vw;
		z-index: 1;
		backdrop-filter: blur(10px);
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
	.copy-button {
		height: 3rem;
		aspect-ratio: 1;
		font-size: 1.2rem;
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
</style>
