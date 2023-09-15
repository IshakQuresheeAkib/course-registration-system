import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Courses from "./Components/Courses/Courses"
import toast from 'react-hot-toast';
import { BiSolidErrorAlt } from 'react-icons/bi';

function App() {
  
  const [cart,setCart] = useState([])
  const [creditHour,setCreditHour] = useState(20)
  const [totalCreditHour,setTotalCreditHour] = useState(0)
  const [price,setPrice] = useState(0);

  const handleSelect = (course) => {
    if(!cart.includes(course)){
      const newCart = [...cart,course]
      const remainingHour = creditHour - course.credit;
      if (remainingHour < 0) {
        return toast.error("You Haven't Sufficient Credit Hour!",{duration:2400});
      }
      setTotalCreditHour(totalCreditHour + course.credit);
      setCart(newCart)
      setCreditHour(remainingHour)
      setPrice((price + course.price).toFixed(3))
    }else{  
      toast.custom(<div className="bg-white py-8 px-4 rounded-lg shadow-md"> <BiSolidErrorAlt className="inline text-4xl text-error"></BiSolidErrorAlt> {course.title} course already added!</div>,{duration:2500}); 
    }
  }
  
console.log(cart);




  return (
    <>
      <h1 className=" font-bold text-3xl text-center mb-7">Course Registration</h1>
      <div className="flex justify-between md:items-start items-center lg:flex-row flex-col">
        <Courses
        handleSelect={handleSelect}
        />
        <Cart
        cart={cart}
        creditHour={creditHour}
        totalCreditHour={totalCreditHour}
        price={price}
        />
      </div>
    </>
  )
}

export default App
