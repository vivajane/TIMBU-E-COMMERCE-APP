import { MdNavigateNext } from "react-icons/md";

const ProductHead = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="flex items-center gap-3 md:mx-24 mx-6 md:text-base text-sm">
        <h1>Home </h1>
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
