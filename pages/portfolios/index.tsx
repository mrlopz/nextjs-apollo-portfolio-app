import { Navbar } from '../../components/shared/navbar'
import { Portfolios } from '../../components/shared/Portfolios'

const PortfoliosPage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Portfolios />
    </div>
  )
}

export default PortfoliosPage
