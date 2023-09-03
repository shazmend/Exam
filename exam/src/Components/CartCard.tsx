import React from 'react'
import axios from "axios";

interface IproductCard {
    title: string;
    category: string;
    price: string;
    // description:string,
    src: string;
  }

function CartCard(props:IproductCard) {
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
      const deleteProduct = () => {

        usersApi.map((item) => {
            if (props.title == item.title) {
              localStorage.setItem("ProductId", item.id);
            }
          });


        axios
        .delete(`https://fakestoreapi.com/carts/${ProductId}`)
        .then((response) => {
            console.log(response.data);
            
        });
    
      };

      const updateQuantity = () =>{
        
      }
    
      //get products to defind the product id
      React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          setUsersApi(response.data);
        });
      }, []);

      const[quantity , setQuantity] = React.useState(1)
    
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
            <div className='flex gap-3'>
            <p>quantity</p>
            <div className='flex gap-3'>
            <button className=' bg-gray-100'
            onClick={()=>{setQuantity(quantity+1)}}
            >+</button>
            <p>{quantity}</p>
            <button className=' bg-gray-100'
            onClick={()=>{setQuantity(quantity-1)}}>-</button>
            </div>
            
            </div>
            
        <div className='flex'>
        <button
              className="absolute left-10 bottom-4 bg-yellow-400 px-2 py-1 rounded-xl hover:bg-yellow-500"
              onClick={deleteProduct}
            >
              Delete
            </button>
             <button
              className="absolute right-10 bottom-4 bg-yellow-400 px-2 py-1 rounded-xl hover:bg-yellow-500"
            //   onClick={updateQuantity}
            >
             update
            </button>
        </div>
           
          </div>
        </div>
      );
}

export default CartCard