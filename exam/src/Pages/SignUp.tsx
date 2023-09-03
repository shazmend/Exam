import React from 'react'
import Nav from '../Components/Nav'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const nav = useNavigate()
    const [userInput , setUserInput]=React.useState({
        id:"" ,
        email:"" ,
        username:"" ,
        password:"" ,
        firstname:"" ,
        lastname:"" ,
        phone:"" ,
    })

    // onClick function
    const postAccount = () =>{
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:userInput.email,
                    username:userInput.username,
                    password:userInput.password,
                    name:{
                        firstname:userInput.firstname,
                        lastname:userInput.lastname
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:userInput.phone
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            nav("/")
    }
  return (
    <div>
        <Nav/>
        <div className="flex flex-col items-center justify-center pt-14">
        <div className="flex flex-col justify-center items-center gap-8 border py-32 px-28 drop-shadow-lg">
            <h1 className='text-3xl'>Register</h1>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="email"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , email: e.target.value})}
            />
             <input
              type="name"
              placeholder="username"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , username: e.target.value})}
            />
            <input
              type="password"
              placeholder="password"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , password: e.target.value})}
            />
            <div className='flex gap-4'>
            <input
              type="name"
              placeholder="first name"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , firstname: e.target.value})}
            />
             <input
              type="name"
              placeholder="Last name"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , lastname: e.target.value})}
            />
            </div>
           
             <input
              type="text"
              placeholder="phone"
              className="border py-1 px-5 rounded-xl"
              onChange={(e)=>setUserInput({...userInput , phone: e.target.value})}
            />
          </div>

          <button 
          className=" bg-yellow-400 py-1 px-5 rounded-xl hover:bg-yellow-500"
          onClick={postAccount}>
            Sign up
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default SignUp