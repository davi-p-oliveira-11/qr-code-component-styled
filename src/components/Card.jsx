import GlobalStyles from "./styles/Global.styles"
import { StyledCard } from "./styles/Card.styled"
import Qrcode from "../images/image-qr-code.png"


const Card = () => {
  return (
    <StyledCard>
      <div>
        <img src={Qrcode} alt="qr code" />
      </div>
      <h3></h3>
      <p></p>
    </StyledCard>
  )
}

export default Card