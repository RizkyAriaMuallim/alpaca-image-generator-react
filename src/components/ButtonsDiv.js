import styled from "styled-components";

function ButtonsDiv ({randomAlpaca, download}) {
    return (
        <StyleButtonsDiv>
            <button onClick={randomAlpaca}>Random</button>
            <button onClick={download}>Download</button>
        </StyleButtonsDiv>
    )
}

export default ButtonsDiv;

const StyleButtonsDiv = styled.div`
	margin-top: 64px;
	display: flex;
	gap: 16px;
	justify-content: center;

	button {
		padding: 16px;
	}
`;