
export const Gallery=()=>{

const images=[
"https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
"https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
]

return(

<section className="container py-5">

<h2 className="text-center mb-5">Gallery</h2>

<div className="row">

{images.map((img,i)=>(
<div className="col-md-4 mb-4" key={i}>
<img src={img} className="img-fluid rounded shadow"/>
</div>
))}

</div>

</section>

)

}
