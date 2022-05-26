import HomePagePortfolio from '../components/home-page-portfolio'
import Navbar from '../components/navbar'

const Portfolios: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <HomePagePortfolio />
    </div>
  )
}

export default Portfolios
