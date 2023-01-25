import React, { useState } from "react";
import styled from "styled-components";
import { data, randomize } from "../utils/data";
import mergeImages from "merge-images";

const Alpaca = () => {
	const [styleOptions, setStyleOptions] = useState({
		...data.hair,
	});
	const [currentDataVal, setCurrentDataVal] = useState("hair");
	const [alpacaStyle, setAlpacaStyle] = useState(
		// hair: data.hair.default,
		// ears: data.ears.default,
		// eyes: data.eyes.default,
		// leg: data.leg.default,
		// mouth: data.mouth.default,
		// neck: data.neck.default,
		// accessories: data.accessories.headphone,
		// backgrounds: data.backgrounds["yellow50.png"],
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
			alpacaStyle.accessories,
			alpacaStyle.ears,
			alpacaStyle.hair,
			alpacaStyle.neck,
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

	const { backgrounds, accessories, ears, hair, eyes, mouth, neck, leg } = alpacaStyle;

	return (
		<StyledMain className="main">
			<h1>ALPACA GENERATOR</h1>
			<Container>
				<StyledDivLeft>
					<StyledDiv
						style={{
							background: `url(${backgrounds})`,
						}}
					>
						<img
							src={accessories}
							alt="accessories"
							className="accessories"
						/>
						<img
							src={require("../assets/alpaca/nose.png")}
							alt="nose"
							className="nose"
						/>
						<img
							src={ears}
							alt="ear"
							className="ears"
						/>
						<img
							src={hair}
							alt="hair"
							className="hair"
						/>
						<img
							src={eyes}
							alt="eyes"
							className="eyes"
						/>
						<img
							src={mouth}
							alt="mouth"
							className="mouth"
						/>
						<img
							src={neck}
							alt="neck"
							className="neck"
						/>
						<img 
							src={leg} 
							alt="leg" 
							className="leg" 
						/>
					</StyledDiv>

					<ButtonsDiv>
						<button onClick={randomAlpaca}>Random</button>
						<button onClick={download}>Download</button>
					</ButtonsDiv>
				</StyledDivLeft>
				<StyledDivRight>
					<h3>ACCESSORIZE THE ALPACA'S</h3>

					<Controls className="controls">
						{Object.keys(data).map((item, id) => (
							<button
								onClick={() => handleStyleOptionsRenser(item)}
								className={
									item === currentDataVal ? "focus" : ""
								}
								key={id}
							>
								{item}
							</button>
						))}{" "}
					</Controls>

					<h3>STYLE</h3>
					<Controls className="controls">
						{Object.keys(styleOptions).map((item, id) => (
							<button
								onClick={() => handleStyleChose(item)}
								className={
									styleOptions[item] ===
									alpacaStyle[currentDataVal]
										? "focus"
										: ""
								}
								key={id}
							>
								{item}
							</button>
						))}
					</Controls>
				</StyledDivRight>
			</Container>
		</StyledMain>
	);
};

export default Alpaca;

const StyledMain = styled.main`
	padding: 32px;
	background-color: #eeecee;
	text-align: center;
	height: 100%;

	h1 {
		font-size: 2.5rem;
		margin-bottom: 32px;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;
const StyledDiv = styled.div`
	position: relative;
	width: 500px;
	min-height: 410px;
	margin: 0 auto;
	img {
		width: 400px;
	}

	@media (max-width: 750px) {
		width: 250px;
		min-height: 212px;
		margin: 0 auto;
		img {
			width: 200px;
		}
	}
	.accessories {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 4;
	}
	.ears {
		position: absolute;
		top: 12px;
		left: 13px;
	}

	.hair {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 2;
	}
	.neck {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 1;
	}

	.nose {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 3;
	}

	.eyes {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 3;
	}

	.mouth {
		position: absolute;
		top: 11px;
		left: 11px;
		z-index: 3;
	}
	.leg {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 3;
	}
`;

const StyledDivLeft = styled.div`
	justify-self: center;
`;
const StyledDivRight = styled.div`
	justify-self: center;
	h3 {
		font-size: 1.5rem;
		margin: 8px 0 16px 0;
		@media (max-width: 800px) {
			margin: 32px 0;
		}
	}
`;
const Controls = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	max-width: 400px;
	button {
		border: 0;
		outline: 0;
		border: 1px solid blue;
		border-radius: 32px;
		padding: 8px 32px;
		background-color: none;
		flex: 1;
		font-size: 1rem;
		color: #2a5ca7;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.6;
		border: 1px solid #2a5ca7;
		color: #2a5ca7;
	}

	button.focus {
		background-color: #2a5ca7;
		color: white;
	}
`;

const ButtonsDiv = styled.div`
	margin-top: 64px;
	display: flex;
	gap: 16px;
	justify-content: center;

	button {
		padding: 16px;
	}
`;