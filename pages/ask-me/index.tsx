import { AskMe } from '../../components/shared/AskMe'
import { Navbar } from '../../components/shared/navbar'

const AskMePage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <AskMe />
    </div>
  )
}

export default AskMePage
