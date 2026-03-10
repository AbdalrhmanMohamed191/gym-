
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

export const Login=()=>{

const {login}=useAuth()
const nav=useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const submit=(e)=>{

e.preventDefault()

if(login(email,password)){
nav("/dashboard")
}else{
alert("Invalid login")
}

}

return(

<div className="container py-5">

<h2>Login</h2>

<form onSubmit={submit}>

<input className="form-control mb-3" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>

<input type="password" className="form-control mb-3" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>

<button className="btn btn-dark">Login</button>

</form>

</div>

)

}
