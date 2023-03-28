import Lottie from 'react-lottie'
import TechAcademicJSON from '../../assets/Lottie/book.json'

export const TechAcademic = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: TechAcademicJSON,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={defaultOption} width={100} />
    </div>
  )
}
