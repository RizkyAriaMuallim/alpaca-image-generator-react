import styled from "styled-components";
import ButtonsDiv from "./ButtonsDiv";

function DivLeft ({ data, randomAlpaca, download }) {
    const { backgrounds, accessories, ears, hair, eyes, mouth, neck, leg } = data;
    return (
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

            <ButtonsDiv randomAlpaca={randomAlpaca} download={download} />
        </StyledDivLeft>
    )
}

export default DivLeft;

const StyledDivLeft = styled.div`
	justify-self: center;
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