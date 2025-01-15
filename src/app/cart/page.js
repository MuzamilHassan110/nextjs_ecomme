"use client";
import { useCart } from "@/hooks/useCart";
import { TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { handleCheckOutService } from "../services/checkOutService";

const page = () => {
  const {
    price,
    cartCount,
    cartItem,
    IncrementProduct,
    dececrementProduct,
    deleteProduct,
    deleteProductById,
  } = useCart();

  const handleCheckOut = async () => {
    const body = cartItem.map((item) => {
      return {
        quantity: item.quantity,
        price: item.price_id,
      };
    });
    const url = await handleCheckOutService(body);
    if (url) {
      window.location.href = url;
    } else {
      console.error("Failed to retrieve Stripe URL.");
    }
  };

  return (
    <div className="m-5 px-20">
      {cartCount > 0 ? (
        <>
          <h2 className="text-4xl font-semibold">Cart Items: {cartCount}</h2>
          <button
            onClick={deleteProduct}
            className="text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer"
          >
            Clear all <TrashIcon className="inline-block w-4 h-4" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-semibold">
            Your shopping cart is empty !
          </h2>
          <Link
            href="/products"
            className="text-xl mt-1 text-orange-500 underline"
          >
            Shop here
          </Link>
        </>
      )}

      {cartCount > 0 &&
        cartItem.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg">
              <Link href={`products/${item.id}`} className="flex items-center">
                <Image
                  src={item.image}
                  alt="image"
                  className="w-20 h-auto"
                  width={200}
                  height={200}
                />
                <p className="font-semibold text-xl ml-2">{item.name}</p>
              </Link>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dececrementProduct(item.id)}
                    className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                  >
                    <MinusIcon className="w-6 h-6" />
                  </button>
                  <p className="font-semibold text-xl">{item.quantity}</p>
                  <button
                    onClick={() => IncrementProduct(item.id)}
                    className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </button>
                </div>
                <p>
                  {" "}
                  <span className="text-xl font-semibold">
                    {(item.price / 100) * item.quantity}
                  </span>
                </p>
                <button
                  onClick={() => {
                    deleteProductById(item.id);
                  }}
                  className="text-orange-500 hover:text-red-600"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="flex flex-col items-end border-t py-4 mt-8">
        <p className="text-xl">
          Total <span className="font-bold text-green-500">{price}</span>
        </p>
        <button
          onClick={handleCheckOut}
          className="mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default page;
