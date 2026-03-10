
import {Services} from "../components/Services"
import {Gallery} from "../components/Gallery"
import {Pricing} from "../components/Pricing"
import {Testimonials} from "../components/Testimonials"
import {BookingForm} from "../components/BookingForm"
import {motion} from "framer-motion"

export const Home=()=>{

return(

<>

<div className="hero">

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1>EMS Fitness Training</h1>
<p>Transform your body in 20 minutes</p>

</motion.div>

</div>

<Services/>

<Gallery/>

<Pricing/>

<Testimonials/>

<section className="container py-5">

<h2 className="text-center mb-4">Book Session</h2>

<BookingForm/>

</section>

</>

)

}
