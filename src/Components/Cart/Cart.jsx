import PropTypes from 'prop-types'


const Cart = ({cart,creditHour,totalCreditHour,price}) => {
    return (
        <div className="bg-white p-5 h-fit rounded-lg w-80 lg:my-0 my-10">
            <h2 className='py-3 text-[#2F80ED] font-bold text-lg'>Credit Hour Remaining {creditHour} hr</h2>
            <hr />
            <h2 className='pt-3  font-bold text-xl'>Course Name</h2>
            <div className='py-5 text-[#1C1B1B99] font-normal text-base'>
                {
                    cart.map(item => <li key={item.id} className='list-inside list-decimal'>{item.title}</li>)
                }
            </div>
            <hr />
            <h4 className='py-3 text-base font-medium text-[#1C1B1BCC]'>Total Credit Hour: {totalCreditHour} </h4>
            <hr />
            <h4 className='py-3 text-base font-semibold text-[#1C1B1BCC]'>Total Price: {price} USD</h4>
        </div>
    );
};

export default Cart;

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    creditHour: PropTypes.number.isRequired,
    totalCreditHour: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }