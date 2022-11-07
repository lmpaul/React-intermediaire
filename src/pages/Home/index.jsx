import homeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const HomeContainer = styled.div`
  width: 70%;
  padding: 50px 10%;
  background-color: ${colors.backgroundLight};
  margin: 50px auto;
  display: flex;
  align-items: center;
`

const HomeTitle = styled.h1`
  line-height: 80px;
`

const StyledButton = styled(Link)`
  padding : 12px 24px; 
  background-color: ${colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  margin-top: 50px;
`

function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeTitle>Repérez vos besoins, on s'occupe du reste avec nos meilleurs talents.</HomeTitle>
        <StyledButton to="survey/1">Faire le test</StyledButton>
      </div>
      
      <img src={homeIllustration} alt="" />
    </HomeContainer>
  )
}

export default Home
