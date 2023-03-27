import Lottie from 'react-lottie'
import TechAnimationJson from '../../assets/Lottie/tech.json'

export const TechAnimation = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: TechAnimationJson,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return <Lottie options={defaultOption} />
}
