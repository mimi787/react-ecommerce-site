import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()
  return <h1>Product Details for ID: {id}</h1>
}
