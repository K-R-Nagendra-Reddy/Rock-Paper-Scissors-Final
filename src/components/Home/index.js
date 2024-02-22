import {Component} from 'react'
import PopupDiv from '../PopupDiv'
import './index.css'
import {
  HomeContainer,
  HeaderContainer,
  HeaderUnOrderList,
  HeaderList,
  ScoreContainer,
  ScoreText,
  Score,
  GameContainer,
  GameButton,
  BottomContainer,
  ResultsContainer,
  SingleChoiceContainer,
  YouOpponent,
  FinalContainer,
  Result,
  PlayAgain,
  Header,
} from './style'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class Home extends Component {
  state = {
    score: 0,
    choseOptionId: null,
    chooseImage: '',
    isSelected: false,
    opponentId: null,
    opponentImage: '',
    result: '',
  }

  onClickPlayAgainButton = () => {
    this.setState({isSelected: false})
  }

  renderBottomContainer = () => {
    const {
      choseOptionId,
      chooseImage,
      score,
      opponentId,
      opponentImage,
      result,
    } = this.state

    return (
      <BottomContainer>
        <ResultsContainer>
          <SingleChoiceContainer>
            <YouOpponent>YOU</YouOpponent>
            <img src={chooseImage} alt="your choice" className="image" />
          </SingleChoiceContainer>
          <SingleChoiceContainer>
            <YouOpponent>OPPONENT</YouOpponent>
            <img src={opponentImage} alt="opponent choice" className="image" />
          </SingleChoiceContainer>
        </ResultsContainer>
        <FinalContainer>
          <Result>{result}</Result>
          <PlayAgain onClick={this.onClickPlayAgainButton}>
            PLAY AGAIN
          </PlayAgain>
        </FinalContainer>
      </BottomContainer>
    )
  }

  render() {
    const {score, isSelected} = this.state
    // console.log(isSelected)
    return (
      <HomeContainer>
        <HeaderContainer>
          <HeaderUnOrderList>
            <Header>
              ROCK <hr /> PAPER <hr /> SCISSORS
            </Header>
          </HeaderUnOrderList>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </HeaderContainer>
        {isSelected === false ? (
          <GameContainer>
            {choicesList.map(each => {
              const onClickGameButton = () => {
                const selectedOption = choicesList.find(
                  option => each.id === option.id,
                )
                const {id, imageUrl} = selectedOption
                const opponent = Math.floor(Math.random() * choicesList.length)
                // console.log(opponent)
                const opponentId = choicesList[opponent].id
                const opponentImage = choicesList[opponent].imageUrl
                console.log(opponentId)
                let result
                if (id === opponentId) {
                  result = 'IT IS DRAW'
                } else if (id === 'ROCK' && opponentId === 'SCISSORS') {
                  result = 'YOU WON'
                } else if (id === 'ROCK' && opponentId === 'PAPER') {
                  result = 'YOU LOSE'
                } else if (id === 'SCISSORS' && opponentId === 'ROCK') {
                  result = 'YOU LOSE'
                } else if (id === 'SCISSORS' && opponentId === 'PAPER') {
                  result = 'YOU WON'
                } else if (id === 'PAPER' && opponentId === 'SCISSORS') {
                  result = 'YOU LOSE'
                } else if (id === 'PAPER' && opponentId === 'ROCK') {
                  result = 'YOU WON'
                }

                if (result === 'YOU WON') {
                  this.setState(prevState => ({score: prevState.score + 1}))
                } else if (result === 'YOU LOSE') {
                  this.setState(prevState => ({score: prevState.score - 1}))
                } else if (result === 'IT IS DRAW') {
                  this.setState(prevState => ({score: prevState.score + 0}))
                }

                console.log(result)
                this.setState({
                  choseOptionId: id,
                  chooseImage: imageUrl,
                  isSelected: true,
                  opponentId,
                  opponentImage,
                  result,
                })
              }

              return (
                <GameButton
                  key={each.id}
                  onClick={onClickGameButton}
                  data-testid={each.testId}
                >
                  {' '}
                  <img src={each.imageUrl} alt={each.id} className="image" />
                </GameButton>
              )
            })}
          </GameContainer>
        ) : (
          this.renderBottomContainer()
        )}
        <PopupDiv className="popup-style" />
      </HomeContainer>
    )
  }
}
export default Home
