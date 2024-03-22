const stratagemNames = {
	//Supply Stratagems
	'⬇️⬆️⬆️⬇️⬆️': 'LIFT-850 Jump Pack',
	'⬇️⬅️⬇️⬆️⬆️⬇️': 'B-1 Supply Pack',
	'⬇️⬆️⬅️⬆️➡️➡️': 'AX/LAS-5 "Guard Dog" Rover',
	'⬇️⬅️⬇️⬇️⬆️⬅️': 'SH-20 Ballistic Shield Backpack',
	'⬇️⬆️⬅️➡️⬅️➡️': 'SH-32 Shield Generator Pack',
	'⬇️⬆️⬅️⬆️➡️⬇️': 'AX/AR-23 "Guard Dog"',
	'⬇️⬅️⬇️⬆️➡️': 'MG-43 Machine Gun',
	'⬇️⬅️➡️⬆️⬇️': 'APW-1 Anti-Materiel Rifle',
	'⬇️⬅️⬇️⬆️⬆️⬅️': 'M-105 Stalwart',
	'⬇️⬇️⬅️⬆️➡️': 'EAT-17 Expendable Anti-tank',
	'⬇️⬅️➡️➡️⬅️': 'GR-8 Recoilless Rifle',
	'⬇️⬅️⬆️⬇️⬆️': 'FLAM-40 Flamethrower',
	'⬇️⬅️⬇️⬆️⬆️➡️': 'AC-8 Autocannon',
	'⬇️➡️⬇️⬆️⬅️➡️': 'RS-422 Railgun',
	'⬇️⬇️⬆️⬇️⬇️': 'FAF-14 SPEAR Launcher',
	'⬇️⬅️⬆️⬅️⬇️': 'GL-21 Grenade Launcher',
	'⬇️⬅️⬇️⬆️⬅️': 'LAS-98 Laser Cannon',
	'⬇️➡️⬇️⬆️⬅️⬅️': 'ARC-3 Arc Thrower',
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
	'➡️⬇️⬅️⬆️⬆️': 'Orbital Gatling Barrage',
	'➡️➡️➡️': 'Orbital Airburst Strike',
	'➡️➡️⬇️⬅️➡️⬇️': 'Orbital 120MM HE Barrage',
	'➡️⬇️⬆️⬆️⬅️⬇️⬇️': 'Orbital 380MM HE Barrage',
	'➡️⬇️➡️⬇️➡️⬇️': 'Orbital Walking Barrage',
	'➡️⬇️⬆️➡️⬇️': 'Orbital Laser',
	'➡️⬆️⬇️⬇️➡️': 'Orbital Railcannon Strike',
	'➡️➡️⬆️': 'Orbital Precision Strike',
	'➡️➡️⬇️➡️': 'Orbital Gas Strike',
	'➡️➡️⬅️⬇️': 'Orbital EMS Strike',
	'➡️➡️⬇️⬆️': 'Orbital Smoke Strike',
	'⬆️➡️➡️': 'Eagle Strafing Run',
	'⬆️➡️⬇️➡️': 'Eagle Airstrike',
	'⬆️➡️⬇️⬇️➡️': 'Eagle Cluster Bomb',
	'⬆️➡️⬇️⬆️': 'Eagle Napalm Airstrike',
	'⬆️➡️⬆️⬇️': 'Eagle Smoke Strike',
	'⬆️➡️⬆️⬅️': 'Eagle 110MM Rocket Pods',
	'⬆️➡️⬇️⬇️⬇️': 'Eagle 500kg Bomb'
};
/**
 * @param {string} command the potential command to be identified
 * @returns {string} the name of the stratagem or equipment that matches the command
 */
export function handleCommandIdentification(command) {
	// @ts-ignore
	if (stratagemNames[command]) {
		// @ts-ignore
		return stratagemNames[command];
	}
	return '';
}
