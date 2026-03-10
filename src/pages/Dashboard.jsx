
export const Dashboard=()=>{

const bookings=JSON.parse(localStorage.getItem("bookings")||"[]")

return(

<div className="container py-5">

<h2>Your Bookings</h2>

<table className="table">

<thead>
<tr>
<th>Name</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{bookings.map((b,i)=>(
<tr key={i}>
<td>{b.name}</td>
<td>{b.date}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}
