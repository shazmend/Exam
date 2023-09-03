import React from "react";
import axios from "axios";

interface IproductCard {
  title: string;
  category: string;
  price: string;
  // description:string,
  src: string;
}

function ProductCard(props: IproductCard) {
  type IusersApi = {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
  };
  const [usersApi, setUsersApi] = React.useState<IusersApi[]>([]);

  const userId = localStorage.getItem("userId");
  const ProductId = localStorage.getItem("ProductId");

  // post product
  const addToCart = () => {
    usersApi.map((item) => {
      if (props.title == item.title) {
        localStorage.setItem("ProductId", item.id);
      }
    });

    axios
      .post("https://fakestoreapi.com/carts", {
        userId: userId,
        date: 2023,
        products: [{ productId: ProductId, quantity: 1 }],
      })
      .then((response) => {
        console.log("add to cart:");
        console.log(response.data);
        
      });

  };

  //get products to defind the product id
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setUsersApi(response.data);
    });
  }, []);

  return (
    <div>
      <div className=" flex border drop-shadow-lg rounded-xl w-60 h-96 bg-gray-100  flex-col justify-start items-center cursor-pointer hover:bg-gray-200">
        <img className=" px-5 py-1 w-full h-48" src={props.src} />
        <h1 className=" text-sm text-center px-4 font-semibold">
          {props.title}
        </h1>

        <p className="text-sm">{props.category}</p>
        <p className="text-lg text-green-600">${props.price}</p>
        {/* <p className=" flex flex-col flex-wrap font-semibold text-xs">{props.description}</p> */}
        <button
          className="absolute bottom-4 bg-yellow-400 px-5 py-1 rounded-xl hover:bg-yellow-500"
          onClick={addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
