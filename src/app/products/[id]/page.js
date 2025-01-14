import { CheckIcon } from "@heroicons/react/24/solid";
import ShareBtn from "../../../components/ShareBtn";
import AddToCart from "../../../components/AddToCart";
import { getProductById, getProducts } from "@/app/services/ProductServices";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  // return posts.map((post) => ({
  //   id: post.id,
  // }))
  
  const products = await getProducts();
  return products.data.map((item) => ({ id: item.id }));
}


// for seo or title
export async function generateMetadata({ params: { id } }) {
  const product = await getProductById(id);
  return {
    title: `Dev Product | ${product.name}`,
  };
}


const Product1 = async ({ params: { id } }) => {
  const product = await getProductById(id);
  const price = product.default_price.unit_amount / 100;

  const clientProduct = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.default_price.unit_amount,
    price_id: product.default_price.id,
    currency: '$',
    image: product.images[0]
  }
  return (
    <div className="m-2 px-20">
      <div className="flex justify-around items-center flex-wrap">
        <div className="w-80 h-80">
          <img src={product.images} className="w-full h-auto" />
        </div>
        <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <div className="flex pt-2 gap-2">
            <CheckIcon className="text-lime-500 w-5 h-5" />
            <span className="font-semibold">In stock</span> |
            <ShareBtn />
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500">Price:</p>
            <p className="text-xl font-semibold">${price}</p>
          </div>
          <AddToCart product = { clientProduct }/>
        </div>
      </div>
      <p className="mt-8 text-2xl">{product.description}</p>
    </div>
  );
};

export default Product1;
