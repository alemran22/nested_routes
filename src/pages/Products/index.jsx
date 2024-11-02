import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {/* product container */}
      {isLoading ? (
        <div className="w-full h-screen flex flex-row justify-center items-center">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {/* product card */}
          {productData.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="card card-compact bg-base-100 shadow-2xl drop-shadow-xl shadow-blue-500"
            >
              <figure className="w-full">
                <img src={image} alt="Shoes" className="h-60 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 60)}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
