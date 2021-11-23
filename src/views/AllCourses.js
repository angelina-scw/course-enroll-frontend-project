import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';

export default function AllCourses() {
    const [courses, setCourses] = useState([]);
    //componentDidMount
    useEffect(() => {
        //1. Make XHR call 2. Display result on the page from response.data
        CourseService.getAllCourses() //Promise API
            .then(response => { //if succeed return result
                setCourses(response.data);
            })  // if not succeed return error
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <CourseTable courses={courses} action={enrollCourse} label="Enroll"/>
        </div>
    );

    function enrollCourse(courseName) {
        CourseService.enrollCourse(courseName)
            .then(response => {
                alert(`Successfully enrolled course ${courseName}.`);
            })
            .catch(error => {
                alert(`Failed to enrolled course ${courseName}.`);
            })
    }
}