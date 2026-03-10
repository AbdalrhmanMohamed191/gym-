
export const Pricing=()=>{

const plans=[
{name:"Basic",price:"$49"},
{name:"Pro",price:"$89"},
{name:"Elite",price:"$149"}
]

return(

<section className="section-dark py-5">

<div className="container">

<h2 className="text-center mb-5">Pricing</h2>

<div className="row">

{plans.map((p,i)=>(

<div className="col-md-4" key={i}>

<div className="card text-center p-4 shadow">

<h3>{p.name}</h3>
<h1>{p.price}</h1>
<button className="btn btn-dark">Choose Plan</button>

</div>

</div>

))}

</div>

</div>

</section>

)

}
