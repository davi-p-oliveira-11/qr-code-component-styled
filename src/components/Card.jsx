import { StyledCard } from "./styles/Card.styled"
import Qrcode from "../images/image-qr-code.png"
import content from "../content"


const Card = () => {
  return (
    <StyledCard>
      <div>
        <img src={Qrcode} alt="qr code" />
      </div>
      <h3>{content.title}</h3>
      <p>{content.text}</p>
    </StyledCard>
  )
}

export default Card