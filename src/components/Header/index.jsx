import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderLogo = styled.img`
  height: 70px;
`

const HeaderContainer = styled.nav`
  width: 90%;
  padding: 30px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to ="/">
        <HeaderLogo src={logo} alt='Shiny Logo'/> 
      </Link>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
