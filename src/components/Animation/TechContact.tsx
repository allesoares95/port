import Lottie from 'react-lottie'
import TechContactJSON from '../../assets/Lottie/contact.json'

export const TechContact = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: TechContactJSON,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={defaultOption} width={170} />
    </div>
  )
}
