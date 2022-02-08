import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
    
    CreateCourseService.execute({
        name:"NODEJS",
        educator: "Dani",
        duraction:10,
    });

    
    return response.send();
}