import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService'

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends Component {
    
    constructor(props) {
        super(props)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)    //hardcoded
        .then(
            response=> {
                console.log(response);
            }
        )
    }
}

export default ListCoursesComponent;