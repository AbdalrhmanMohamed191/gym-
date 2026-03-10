
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

export const Register=()=>{

const {register}=useAuth()
const nav=useNavigate()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const submit=(e)=>{

e.preventDefault()

register({name,email,password})

alert("Registered successfully")

nav("/login")

}

return(

<div className="container py-5">

<h2>Register</h2>

<form onSubmit={submit}>

<input className="form-control mb-3" placeholder="Name" onChange={e=>setName(e.target.value)}/>

<input className="form-control mb-3" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>

<input type="password" className="form-control mb-3" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>

<button className="btn btn-dark">Register</button>

</form>

</div>

)

}
