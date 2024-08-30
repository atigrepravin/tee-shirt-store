import { Product } from "../../types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 hover:shadow-md">
      <a href="#">
        <img
          className="rounded-t-lg object-cover h-60 w-full"
          src={product.imageURL}
          alt={product.name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="text-sm">
          {product.color} | {product.gender} | {product.type}
        </div>
        <div className="text-xl font-semibold my-3">₹ {product.price}</div>
        <div className="flex justify-center">
          <a
            href="#"
            className="items-center w-full px-3 py-2 font-semibold text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
