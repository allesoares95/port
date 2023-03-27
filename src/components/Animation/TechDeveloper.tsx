import Lottie from 'react-lottie'
import TechDeveloperJSON from '../../assets/Lottie/computer.json'

export const TechDeveloper = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: TechDeveloperJSON,
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
