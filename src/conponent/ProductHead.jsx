import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductHead = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="flex items-center gap-3 md:mx-24 mx-6 md:text-base text-sm">
        <NavLink to = "/">Home</NavLink>
        <div>
          <MdNavigateNext />
        </div>
        <h1>{product.category}</h1>
        <div>
          <MdNavigateNext />
        </div>
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

export default ProductHead;
