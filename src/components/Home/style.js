import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const HeaderContainer = styled.nav`
  height: 20vh;
  width: 65vw;
  border: solid #ffffff 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderUnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const HeaderList = styled.li`
  list-style-type: none;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 6px;
`
export const ScoreContainer = styled.div`
  height: 18vh;
  width: 20vw;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Roboto';
`
export const Score = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  color: #223a5f;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const GameButton = styled.button`
  height: 20vh;
  width: 40vw;
  border: 0px;
  margin-right: 20px;
  background-color: transparent;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SingleChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const YouOpponent = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 16px;
`

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Result = styled.p`
  font-size: 26px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const PlayAgain = styled.button`
  background-color: #ffffff;
  height: 25px;
  width: 250px;
  border-radius: 10px;
  color: #223a5f;
`
export const Header = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
`
