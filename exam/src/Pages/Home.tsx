import React from 'react'
import Nav from '../Components/Nav'
import axios from "axios";
import ProductCard from '../Components/ProductCard'

function Home() {

    type IusersApi = {
        id:string ,
        title:string ,
        price:string,
        description:string,
        category:string ,
        image:string,
    }
    const [usersApi , setUsersApi]=React.useState<IusersApi[]>([])
    const [search , setSearch] = React.useState("")
  
    //get all product
    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setUsersApi(response.data);
        });
      }, []);

  return (
    <div className=''>
        <Nav/>
          {/* search bar */}
      <div className=" flex justify-center items-center gap-2 mt-10">
            <input
              type="text"
              placeholder="Search Amazon"
              className=" border py-1 px-60 rounded-xl"
              onChange={(e)=>setSearch(e.target.value )}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            </div>
        <div className='grid grid-cols-4 gap-3 justify-center items-center ml-14 mt-14'>
        {
          usersApi.filter(item =>item.category.toLowerCase().includes(search.toLowerCase())).map((item) => (
                <div>
                    <ProductCard title={item.title} src={item.image} category={item.category} price={item.price}/>
                </div>
              ))  
        }
        </div>
        
    </div>
  )
}

export default Home