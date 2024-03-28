const stratagemNames = {
	//Supply Stratagems
	'⬇️⬅️⬇️⬆️⬆️⬅️': 'M-105 Stalwart',
	'⬇️⬅️⬇️⬆️⬆️➡️': 'AC-8 Autocannon',
	'⬅️⬇️➡️⬆️⬅️⬇️⬇️': 'EXO-45 Patriot Exosuit',
	'⬇️⬅️⬆️⬇️⬇️': 'MG-206 Heavy Machine Gun',
	'⬇️⬆️⬅️➡️⬅️➡️': 'SH-32 Shield Generator Pack',
	'⬇️➡️⬇️⬆️⬅️➡️': 'RS-422 Railgun',
	'⬇️⬅️⬇️⬆️⬅️': 'LAS-98 Laser Cannon',
	'⬇️➡️⬇️⬆️⬅️⬅️': 'ARC-3 Arc Thrower',
	'⬇️⬆️⬅️⬆️➡️⬇️': 'AX/AR-23 "Guard Dog"',
	'⬇️⬇️⬆️⬇️⬇️': 'FAF-14 SPEAR Launcher',
	'⬇️⬅️⬆️⬅️⬇️': 'GL-21 Grenade Launcher',
	'⬇️⬅️⬇️⬆️➡️': 'MG-43 Machine Gun',
	'⬇️⬅️⬇️⬇️⬆️⬅️': 'SH-20 Ballistic Shield Backpack',
	'⬇️⬅️⬇️⬆️⬆️⬇️': 'B-1 Supply Pack',
	'⬇️⬅️⬆️⬇️⬆️': 'FLAM-40 Flamethrower',
	'⬇️⬆️⬅️⬆️➡️➡️': 'AX/LAS-5 "Guard Dog" Rover',
	'⬇️⬅️➡️➡️⬅️': 'GR-8 Recoilless Rifle',
	'⬇️⬆️⬆️⬇️⬆️': 'LIFT-850 Jump Pack',
	'⬇️⬅️➡️⬆️⬇️': 'APW-1 Anti-Materiel Rifle',
	'⬇️⬇️⬅️⬆️➡️': 'EAT-17 Expendable Anti-tank',
	'⬇️⬇️⬆️⬅️➡️': 'LAS-99 Quasar Cannon',
	//Mission Stratagems
	'⬆️⬇️➡️⬅️⬆️': 'Reinforce',
	'⬆️⬇️➡️⬆️': 'SOS Beacon',
	'⬇️⬇️⬆️➡️': 'Resupply',
	'⬇️⬆️⬅️⬇️⬆️➡️⬇️⬆️': 'NUX-223 Hellbomb',
	'⬇️⬇️⬇️⬆️⬆️': 'SSSD Delivery',
	'⬆️⬆️⬅️➡️⬇️⬇️': 'Seismic Probe',
	'⬇️⬇️⬆️⬆️⬆️': 'Upload Data',
	'⬆️⬆️⬅️⬆️➡️': 'Eagle Rearm',
	'➡️➡️⬅️⬅️': 'Illumination Flare',
	'➡️⬆️⬆️⬇️': 'SEAF Artillery',
	'⬇️⬆️⬇️⬆️': 'Super Earth Flag',
	//Defensive Stratagems
	'⬇️⬆️⬅️➡️➡️⬅️': 'E/MG-101 HMG Emplacement',
	'⬇️⬇️⬅️➡️⬅️➡️': 'FX-12 Shield Generator Relay',
	'⬇️⬆️➡️⬆️⬅️➡️': 'A/ARC-3 Tesla Tower',
	'⬇️⬅️⬆️➡️': 'MD-6 Anti-Personnel Minefield',
	'⬇️⬅️⬅️⬇️': 'MD-I4 Incendiary Mines',
	'⬇️⬆️➡️➡️⬆️': 'A/MG-43 Machine Gun Sentry',
	'⬇️⬆️➡️⬅️': 'A/G-16 Gatling Sentry',
	'⬇️⬆️➡️➡️⬇️': 'A/M-12 Mortar Sentry',
	'⬇️⬆️➡️⬆️⬅️⬆️': 'A/AC-8 Autocannon Sentry',
	'⬇️⬆️➡️➡️⬅️': 'A/MLS-4X Rocket Sentry',
	'⬇️⬆️➡️⬇️➡️': 'A/M-23 EMS Mortar Sentry',
	//Offensive Stratagems
	'⬆️➡️⬇️⬇️⬇️': 'Eagle 500kg Bomb',
	'➡️⬇️⬅️⬆️⬆️': 'Orbital Gatling Barrage',
	'➡️➡️➡️': 'Orbital Airburst Strike',
	'➡️➡️⬇️⬅️➡️⬇️': 'Orbital 120MM HE Barrage',
	'➡️⬇️⬆️⬆️⬅️⬇️⬇️': 'Orbital 380MM HE Barrage',
	'➡️⬇️➡️⬇️➡️⬇️': 'Orbital Walking Barrage',
	'➡️⬇️⬆️➡️⬇️': 'Orbital Laser',
	'➡️⬆️⬇️⬇️➡️': 'Orbital Railcannon Strike',
	'➡️➡️⬆️': 'Orbital Precision Strike',
	'➡️➡️⬅️⬇️': 'Orbital EMS Strike',
	'➡️➡️⬇️⬆️': 'Orbital Smoke Strike',
	'➡️➡️⬇️➡️': 'Orbital Gas Strike',
	'⬆️➡️➡️': 'Eagle Strafing Run',
	'⬆️➡️⬇️➡️': 'Eagle Airstrike',
	'⬆️➡️⬇️⬇️➡️': 'Eagle Cluster Bomb',
	'⬆️➡️⬇️⬆️': 'Eagle Napalm Airstrike',
	'⬆️➡️⬆️⬇️': 'Eagle Smoke Strike',
	'⬆️➡️⬆️⬅️': 'Eagle 110MM Rocket Pods'
};
/**
 * @param {string} command the potential command to be identified
 * @returns {string} the name of the stratagem or equipment that matches the command
 */
export function identifyCommand(command) {
	// @ts-ignore
	if (stratagemNames[command]) {
		// @ts-ignore
		return stratagemNames[command];
	}
	return '';
}

/**
 *
 * @param {string} name name of target stratagem
 * @param {string} command inputted guess
 * @returns boolean of whether the guess is correct
 */
export function verifyCommandMatch(name, command) {
	// @ts-ignore
	if (stratagemNames[command] === name) {
		return true;
	}
	return false;
}

/**
 *
 * @returns {string} a random stratagem name
 */
export function getRandomStratagem() {
	const stratagemKeys = Object.keys(stratagemNames);
	const randomIndex = Math.floor(Math.random() * stratagemKeys.length);
	// @ts-ignore
	return stratagemNames[stratagemKeys[randomIndex]];
}

/**
 * @param {string} name given name to retrieve command for
 * @returns {string} the command for the given name
 */
export function getCommandFromName(name) {
	const stratagemKeys = Object.keys(stratagemNames);
	for (let i = 0; i < stratagemKeys.length; i++) {
		// @ts-ignore
		if (stratagemNames[stratagemKeys[i]] === name) {
			return stratagemKeys[i];
		}
	}
	return '';
}
