import styled from "styled-components";
import Container from "./Container";

function Main ({dataalpaca, dataright, dataleft}) {
    return (
		<>
			<StyledMain className="main">
				<h1>ALPACA GENERATOR</h1>
				<Container dataalpaca={dataalpaca} dataright={dataright} dataleft={dataleft}  />
			</StyledMain>
		</>
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