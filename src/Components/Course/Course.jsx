import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from 'react-icons/go';
import { Toaster } from 'react-hot-toast';

const Course = ({course,handleSelect}) => {
    const {credit,description,image,price,title} = course
    
    return (
        <div className='card p-4 bg-white space-y-2 w-80'>
            <img src={image} alt="" />
            <h1 className='font-semibold text-lg'>{title}</h1>
            <p className=' text-xs text-[#1C1B1B99] font-normal h-24 '>{description}</p>
            <div className='flex items-center justify-between pb-1'>
                <p className='flex items-center gap-1 font-medium text-[#1C1B1B99]'><FiDollarSign className='text-black inline'></FiDollarSign>
                Price: {price}</p>
                <p className='flex-grow-0 flex items-center font-medium gap-1 text-[#1C1B1B99]'><GoBook className='text-black inline'></GoBook>
                Credit: {credit}hr</p>
            </div>
            <button onClick={()=> {
                handleSelect(course)}} className="btn bg-[#2F80ED] normal-case btn-sm text-white">Select</button>
                <Toaster
                />
        </div>
    );
};

export default Course;


Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired,
  }