
export const Services=()=>{

const services=[
{title:"Weight Loss",desc:"Burn fat with EMS technology"},
{title:"Muscle Building",desc:"Activate deep muscle fibers"},
{title:"Personal Training",desc:"Train with professional coaches"}
]

return(

<section className="container py-5">

<h2 className="text-center mb-5">Services</h2>

<div className="row">

{services.map((s,i)=>(

<div className="col-md-4" key={i}>

<div className="card shadow p-4 text-center">
<h4>{s.title}</h4>
<p>{s.desc}</p>
</div>

</div>

))}

</div>

</section>

)

}
