import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Answer from '../../components/Answer'

const QuestionContainer = styled.div`
  text-align: center;
`

const QuestionTitle = styled.h1`
  text-decoration: underline; 
  text-decoration-color: ${colors.primary};
  line-height: 30px;
`

const StyledLink = styled(Link)`
  color: black; 
  text-decoration: underline; 
  margin: 10px 60px;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <QuestionContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      <p>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</p>
      <Answer/>
      <StyledLink to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
      {questionNumberInt === 10 ? (
        <StyledLink to="/results">Résultats</StyledLink>
      ) : (
        <StyledLink to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
      )}
    </QuestionContainer>

  )
}

export default Survey
