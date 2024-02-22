import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index'
import {RiCloseLine} from 'react-icons/ri'
import {PopupContainer, Heading, Button} from './style'
import './index.css'

const PopupDiv = () => (
  <Popup modal trigger={<Button>Rules</Button>}>
    {close => (
      <PopupContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="rules-image"
        />
        <Button onClick={() => close()}>
          {' '}
          <RiCloseLine />
        </Button>
      </PopupContainer>
    )}
  </Popup>
)
export default PopupDiv
