import Link from "next/link";

const ProductCard = ({ item }) => {
  const price = item.default_price.unit_amount / 100;

  return (
    <div key={item.id}>
      <Link
        href={`/products/${item.id}`}
        className="w-full sm:w-64 h-62 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl"
      >
        <img src={item.images} className="w-full h-40" />
        <div className="flex justify-between p-2">
          <div>
            <h1 className="font-bold">{item.name}</h1>
            <p className="w-40 truncate">{item.description}</p>
          </div>
          <div className="text-green-500 py-2 font-bold">$ {price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
