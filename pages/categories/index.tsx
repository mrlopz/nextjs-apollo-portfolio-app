import { Categories } from '../../components/shared/Categories'
import { Navbar } from '../../components/shared/navbar'

const CategoriesPage: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Categories />
    </div>
  )
}

export default CategoriesPage
