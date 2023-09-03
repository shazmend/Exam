import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//components
import Nav from "../Components/Nav";

function Login() {
    type IusersApi = {
        id:string ,
        email:string ,
        username:string,
        password:string,
        firstname:string ,
        lastname:string,
        phone:string,
    }
    localStorage.setItem("navAccess","false")
    const nav = useNavigate()
    const [usersApi , setUsersApi]=React.useState<IusersApi[]>([])
    const [userInput , setUserInput]=React.useState({
        email:"" ,
        password:"" ,
    })

    // Get User Api
    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/users")
        .then((response) => {
            setUsersApi(response.data);
        });
      }, []);

    const logInUser =() =>{
        if(userInput.email != "" && userInput.password !=""){
            usersApi.map((item) => {
                if(item.email == userInput.email && item.password == userInput.password){
                    localStorage.setItem("navAccess","true")
                    localStorage.setItem("userId" , item.id)
                    console.log(item);
                    
                    (nav("/Home"))
                }
            })   
        }else{
            alert("empty")
        }
    }
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center pt-32">
        <div className="flex flex-col justify-center items-center gap-8 border py-32 px-28 drop-shadow-lg">
        <h1 className='text-3xl'>Log in</h1>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="email"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , email: e.target.value})}
            />

            <input
              type="text"
              placeholder="password"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , password: e.target.value})}
            />
          </div>

          <button 
          className=" bg-yellow-400 py-1 px-5 rounded-xl hover:bg-yellow-500"
          onClick={logInUser}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
