import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';

export default function AllCourses() {
    const [courses, setCourses] = useState([]);
    //componentDidMount
    useEffect(() => {
        //AJAX
        //1. Make XHR call
        CourseService.getAllCourses() //Promise API
            .then(response => { //if succeed we can display
                // 2. Display result on the page
                // courses are fectched from response.data
                // serCourse is state 
                setCourses(response.data);
            }) //傳function // if not succeed return error
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <CourseTable courses={courses}/>
        </div>
    );
}