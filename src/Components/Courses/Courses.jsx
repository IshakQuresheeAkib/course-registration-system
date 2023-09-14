import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleSelect}) => {

    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])


    console.log(courses);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 ">
            {
                courses.map(course=> <Course
                key={course.id}
                course={course}
                handleSelect={handleSelect}
                />)
            }
        </div>
    );
};

export default Courses;

Courses.propTypes = {
    handleSelect: PropTypes.func.isRequired
  }