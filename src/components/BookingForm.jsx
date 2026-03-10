
export const BookingForm=()=>{

const submit=(e)=>{

e.preventDefault()

const form=new FormData(e.target)

const booking={
name:form.get("name"),
date:form.get("date")
}

const bookings=JSON.parse(localStorage.getItem("bookings")||"[]")
bookings.push(booking)

localStorage.setItem("bookings",JSON.stringify(bookings))

alert("Session booked!")

e.target.reset()

}

return(

<form onSubmit={submit} className="row g-3">

<div className="col-md-6">
<input name="name" className="form-control" placeholder="Name"/>
</div>

<div className="col-md-6">
<input name="date" type="date" className="form-control"/>
</div>

<div className="col-12">
<button className="btn btn-dark">Book Session</button>
</div>

</form>

)

}
