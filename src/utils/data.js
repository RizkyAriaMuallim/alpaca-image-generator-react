export const data = {
	hair: {
		default: require("../assets/alpaca/hair/default.png"),
		curls: require("../assets/alpaca/hair/curls.png"),
		short: require("../assets/alpaca/hair/short.png"),
		bang: require("../assets/alpaca/hair/bang.png"),
		elegant: require("../assets/alpaca/hair/elegant.png"),
		quiff: require("../assets/alpaca/hair/quiff.png"),
	},
	ears: {
		default: require("../assets/alpaca/ears/default.png"),
		"tilt backward": require("../assets/alpaca/ears/tilt-backward.png"),
		"tilt forward": require("../assets/alpaca/ears/tilt-forward.png"),
	},
	eyes: {
		default: require("../assets/alpaca/eyes/default.png"),
		angry: require("../assets/alpaca/eyes/angry.png"),
		naughty: require("../assets/alpaca/eyes/naughty.png"),
		panda: require("../assets/alpaca/eyes/panda.png"),
		smart: require("../assets/alpaca/eyes/smart.png"),
		star: require("../assets/alpaca/eyes/star.png"),
	},
	leg: {
		"bubble tea": require("../assets/alpaca/leg/bubble-tea.png"),
		cookie: require("../assets/alpaca/leg/cookie.png"),
		default: require("../assets/alpaca/leg/default.png"),
		"game console": require("../assets/alpaca/leg/game-console.png"),
		"tilt backward": require("../assets/alpaca/leg/tilt-backward.png"),
		"tilt forward": require("../assets/alpaca/leg/tilt-forward.png"),
	},
	mouth: {
		astonished: require("../assets/alpaca/mouth/astonished.png"),
		default: require("../assets/alpaca/mouth/default.png"),
		eating: require("../assets/alpaca/mouth/eating.png"),
		laugh: require("../assets/alpaca/mouth/laugh.png"),
		tongue: require("../assets/alpaca/mouth/tongue.png"),
	},
	neck: {
		"bend backword": require("../assets/alpaca/neck/bend-backward.png"),
		"bend forward": require("../assets/alpaca/neck/bend-forward.png"),
		default: require("../assets/alpaca/neck/default.png"),
		thick: require("../assets/alpaca/neck/thick.png"),
	},
	accessories: {
		earings: require("../assets/alpaca/accessories/earings.png"),
		flower: require("../assets/alpaca/accessories/flower.png"),
		glasses: require("../assets/alpaca/accessories/glasses.png"),
		headphone: require("../assets/alpaca/accessories/headphone.png"),
	},
	backgrounds: {
		"blue50": require("../assets/alpaca/backgrounds/blue50.png"),
		"blue60": require("../assets/alpaca/backgrounds/blue60.png"),
		"blue70": require("../assets/alpaca/backgrounds/blue70.png"),
		"darkblue30": require("../assets/alpaca/backgrounds/darkblue30.png"),
		"darkblue50": require("../assets/alpaca/backgrounds/darkblue50.png"),
		"darkblue70": require("../assets/alpaca/backgrounds/darkblue70.png"),
		"green50": require("../assets/alpaca/backgrounds/green50.png"),
		"green60": require("../assets/alpaca/backgrounds/green60.png"),
		"green70": require("../assets/alpaca/backgrounds/green70.png"),
		"grey40": require("../assets/alpaca/backgrounds/grey40.png"),
		"grey70": require("../assets/alpaca/backgrounds/grey70.png"),
		"grey80": require("../assets/alpaca/backgrounds/grey80.png"),
		"red50": require("../assets/alpaca/backgrounds/red50.png"),
		"red60": require("../assets/alpaca/backgrounds/red60.png"),
		"red70": require("../assets/alpaca/backgrounds/red70.png"),
		"yellow50": require("../assets/alpaca/backgrounds/yellow50.png"),
		"yellow60": require("../assets/alpaca/backgrounds/yellow60.png"),
		"yellow70": require("../assets/alpaca/backgrounds/yellow70.png"),
	},
};

function randomObjVal(obj) {
	var keys = Object.keys(obj);
	return obj[keys[(keys.length * Math.random()) << 0]];
}
export function randomize() {
	const res = {
		hair: randomObjVal(data.hair),
		ears: randomObjVal(data.ears),
		eyes: randomObjVal(data.eyes),
		leg: randomObjVal(data.leg),
		mouth: randomObjVal(data.mouth),
		neck: randomObjVal(data.neck),
		accessories: randomObjVal(data.accessories),
		backgrounds: randomObjVal(data.backgrounds),
	};
	return res;
}