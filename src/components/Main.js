import styled from "styled-components";
import Container from "./Container";

function Main ({dataAlpaca, dataRight, dataLeft}) {
    return (
		<StyledMain>
            <h1>ALPACA GENERATOR</h1>
			<Container dataAlpaca={dataAlpaca} dataRight={dataRight} dataLeft={dataLeft}  />
		</StyledMain>
	)
}
export default Main;

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