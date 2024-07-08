
import { MdNavigateNext } from 'react-icons/md';

const ProductHead = (props) => {
    const{ product } = props
  return (
    <div>
        <div className="md:flex md:mx-24 mx-6">
        HOME <MdNavigateNext /> {product.category} <MdNavigateNext /> {product.name}

      
    </div>
      
    </div>
  )
}

export default ProductHead
