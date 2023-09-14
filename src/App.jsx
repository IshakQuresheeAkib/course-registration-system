import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Courses from "./Components/Courses/Courses"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


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
        return alert("Your Credit Hour isn't enough to buy!");
      }
      setTotalCreditHour(totalCreditHour + course.credit);
      setCart(newCart)
      setCreditHour(remainingHour)
      setPrice(price + course.price)
    }else{  
      
      toast.error(' Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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
