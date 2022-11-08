import styled from "styled-components"
import colors from "../../utils/style/colors"

const ButtonContainer = styled.div`
    width: 550px;
    display:flex;
    justify-content: space-between; 
    align-items: center;
    margin: 100px auto;

`

const Button = styled.div`
    padding: 30px; 
    width: 150px;
    font-size: 18px;
    background-color: ${colors.backgroundLight};
    color: black;
    border-radius: 16px;
    ${(props) => props.$isSelected && `border: solid 2px ${colors.primary};`}
`


function Answer() {
    return(
    <ButtonContainer>
        <Button $isSelected>Oui</Button>
        <Button>Non</Button>
    </ButtonContainer>
    )

}


export default Answer