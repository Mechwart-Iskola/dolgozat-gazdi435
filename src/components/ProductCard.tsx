import { Product } from '../types/types.'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='product-info'>
        <img src={product.image} className='product-image' alt={product.name} />
        <div className='product-details'>
            <h2>{product.name}</h2>
            <h1>{product.id}</h1>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
        </div>
    </div>
  )
}

export default ProductCard