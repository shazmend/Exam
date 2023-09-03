import React from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import CartCard from "../Components/CartCard";

function Cart() {
  type IcartApi = {
    products:[{
        productId:string;
    }]
   
  };

  type IproductsApi = {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
  };
  console.log();
  

  const [productsApi, setProductApi] = React.useState<IproductsApi[]>([]);

  const [cartApi, setCartApi] = React.useState<IcartApi[]>([]);

  // get product api
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProductApi(response.data);
    });
  }, []);

  // get Cart api
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/carts").then((response) => {
      setCartApi(response.data);
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex flex-col gap-5 justify-center items-center">
      { cartApi.map((item) => {
        if (item.products[0].productId != "") { 
            console.log(item.products[0].productId);
            return(
                productsApi.map((product) => {
                    if (item.products[0].productId == product.id) {
                        return(
                        <CartCard
                          title={product.title}
                          src={product.image}
                          category={product.category}
                          price={product.price}/>
                        )
                    }
                  })

                )
         
        }
      })}
      </div>
    </div>
  );
}

export default Cart;
