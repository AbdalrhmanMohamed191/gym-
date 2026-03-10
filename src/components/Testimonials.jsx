
export const Testimonials=()=>{

const reviews=[
{name:"Ahmed",text:"Amazing EMS experience"},
{name:"Sara",text:"Lost 5kg in 2 months"},
{name:"Omar",text:"Best trainers ever"}
]

return(

<section className="container py-5">

<h2 className="text-center mb-5">Testimonials</h2>

<div className="row">

{reviews.map((r,i)=>(
<div className="col-md-4" key={i}>
<div className="card shadow p-4">
<h5>{r.name}</h5>
<p>{r.text}</p>
</div>
</div>
))}

</div>

</section>

)

}
