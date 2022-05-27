import { useRouter } from 'next/router'

const PortfolioDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <h1>I am Detail Page with ID: {id}</h1>
}

export default PortfolioDetail
