import Footer from '../components/footer'
import ForumCategories from '../components/forum-categories'
import Hero from '../components/hero'
import HomePage from '../components/home-page'
import LoginPage from '../components/login-page'
import Navbar from '../components/navbar'
import PostPage from '../components/postpage'
import Replier from '../components/replier'
import Topics from '../components/topics'

const Home: React.FC = () => (
  <div className="portfolio-app">
    <Navbar />
    <Hero />
    <div className="container">
      <HomePage />
      <ForumCategories />
      <Topics />
      <PostPage />
      <LoginPage />
    </div>
    <Replier />
    <Footer />
  </div>
)

export default Home
