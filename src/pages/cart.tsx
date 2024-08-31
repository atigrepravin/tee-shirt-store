import { QuantitySelector } from "../components/common/quantity-selector";

const product = {
  id: 1,
  imageURL:
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
  name: "Black Polo",
  type: "Polo",
  price: 250,
  currency: "INR",
  color: "Black",
  gender: "Men",
  quantity: 3,
};
const Cart = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>
      <div className="flex gap-20">
        <div className="grow">
          <div className="border-b first:border-t justify-between flex p-6 gap-6">
            <div className="flex">
              <a href="#" className="h-24">
                <img
                  className="rounded-t-lg object-cover h-full w-full"
                  src={product.imageURL}
                  alt={product.name}
                />
              </a>
              <div className="mx-6">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h5>
                </a>
                <div className="text-sm">
                  {product.color} | {product.gender} | {product.type}
                </div>
                <div className="text-base font-semibold my-2">
                  ₹ {product.price}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap content-center mx-8">
              <QuantitySelector />
            </div>
            <div className="flex content-center flex-wrap">
              <button className="items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 h-10 px-6 py-2 rounded-lg  focus:outline-none">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="w-80 border p-8 top-32">
          <h3 className="text-lg font-semibold m-1">Order Summary</h3>
          <div className="flex justify-between my-3">
            <div>Items:</div>
            <div>4</div>
          </div>
          <div className="flex border-t py-3 justify-between font-semibold">
            <div>Total:</div>
            <div>2300</div>
          </div>
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
