import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 240px 250px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
`

const Container = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
`

const Subtitle = styled.p`
  color: ${colors.secondary};
  font-weight: bold;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <Container>
      <h1>Trouvez votre prestataire</h1>
      <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default Freelances
