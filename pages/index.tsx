import { AskMe } from '../components/shared/AskMe'
import { Categories } from '../components/shared/Categories'
import { Footer } from '../components/shared/Footer'
import { Hero } from '../components/shared/Hero'
import { Login } from '../components/shared/Login'
import { Navbar } from '../components/shared/navbar'
import { Portfolios } from '../components/shared/Portfolios'
import { Postpage } from '../components/shared/Postpage'
import { Replier } from '../components/shared/Replier'
import { Topics } from '../components/shared/Topics'

const HomePage: React.FC = () => (
  <div className="portfolio-app">
    <Navbar />
    <Hero />
    <Portfolios />
    <AskMe />
    <Categories />
    <Topics />
    <Postpage />
    <Login />
    <Replier />
    <Footer />
  </div>
)

export default HomePage
