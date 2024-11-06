import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData();

  return (
    <div className="p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-5/12">
          <img src={data.image} alt="Album" className="h-[450px] object-fill" />
        </figure>
        <div className="card-body w-7/12">
          <p className="capitalize text-xl font-bold">{data.category}</p>
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <p className="text-3xl font-bold text-green-700 ">${data.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
