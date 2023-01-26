import React, { useState } from "react";
import { data, randomize } from "../utils/data";
import mergeImages from "merge-images";
import Main from "./Main";

const Alpaca = () => {
	const [styleOptions, setStyleOptions] = useState({
		...data.hair,
	});
	const [currentDataVal, setCurrentDataVal] = useState("hair");
	const [alpacaStyle, setAlpacaStyle] = useState(
		randomize()
	);

	function handleStyleOptionsRenser(item) {
		setStyleOptions(data[item]);
		setCurrentDataVal(item);
	}

	function handleStyleChose(item) {
		setAlpacaStyle({
			...alpacaStyle,
			[currentDataVal]: data[currentDataVal][item],
		});
	}

	function randomAlpaca() {
		const res = randomize();
		setAlpacaStyle({ ...res });
	}

	function download() {
		mergeImages([
			alpacaStyle.backgrounds,
			alpacaStyle.ears,
			alpacaStyle.hair,
			alpacaStyle.neck,
			alpacaStyle.accessories,
			require("../assets/alpaca/nose.png"),
			alpacaStyle.eyes,
			alpacaStyle.mouth,
			alpacaStyle.leg,
		]).then((b64) => {
			var a = document.createElement("a");
			a.href = b64;
			a.download = "Alpaca.png";
			a.click();
		});
	}

	const dataLeft = {
		"randomAlpaca" : randomAlpaca,
		"download" : download 
	};
	const dataRight = {
		"handleStyleOptionsRenser" : handleStyleOptionsRenser,
		"currentDataVal" : currentDataVal,
		"styleOptions" : styleOptions,
		"handleStyleChose" : handleStyleChose,
		"alpacaStyle" : alpacaStyle
	};
	return (
		<Main dataalpaca={alpacaStyle} dataright={dataRight} dataleft={dataLeft} />
	);
};

export default Alpaca;