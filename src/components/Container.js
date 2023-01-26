import styled from "styled-components";
import DivLeft from "./DivLeft";
import DivRight from "./DivRight";

function Container ({dataalpaca, dataright, dataleft}) {
    return (
        <StyleContainerS>
            <DivLeft dataalpaca={dataalpaca} {...dataleft} />
            <DivRight {...dataright} />
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