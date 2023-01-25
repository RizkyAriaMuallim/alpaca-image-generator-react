import styled from "styled-components";

import { data } from "../utils/data";

function DivRight ({handleStyleOptionsRenser, currentDataVal, styleOptions, handleStyleChose, alpacaStyle}) {
    return (
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
    )
}

export default DivRight;

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