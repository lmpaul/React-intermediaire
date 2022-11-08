import styled from "styled-components"
import colors from "../../utils/style/colors"
import errorImage from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  width: 90%;
  height: 100vh;
  background-color: ${colors.backgroundLight};
  margin: 0 auto;
  text-align: center;
  & p {
    font-size: 20px; 
    font-weight: bold;
    padding: 50px 0;
  }
`

const StyledImage = styled.img`
width: 50%;

`

function Error() {
  return (
    <ErrorWrapper>
      <p>Oups...</p>
      <StyledImage src={errorImage} alt="erreur 404"/>
      <p>Il semblerait qu'il y ait un problème...</p>
    </ErrorWrapper>
  )
}

export default Error
