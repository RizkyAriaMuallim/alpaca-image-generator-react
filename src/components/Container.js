import styled from "styled-components";
import DivLeft from "./DivLeft";
import DivRight from "./DivRight";

function Container ({dataAlpaca, dataRight, dataLeft}) {
    return (
        <StyleContainerS>
            <DivLeft dataAlpaca={dataAlpaca} dataLeft={dataLeft} />
            <DivRight {...dataRight} />
        </StyleContainerS>
    )
}
export default Container;

const StyleContainerS = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;