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
	text-align: center;
	height: 100%;

	animation: animateBg 5s linear infinite;
	background-image: linear-gradient(0deg,#0080ff,#388363,#fcf8d6,#0080ff,#388363);
	background-size: 100% 400%;

	@keyframes animateBg {
		0% { background-position: 0% 100%; }
		100% { background-position: 0% 0%; }
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 32px;
		color: #eeecee;
	}
`;