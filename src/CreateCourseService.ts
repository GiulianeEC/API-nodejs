{/*
    nome - string
    duraction -number
    intructor - string

*/}

interface Course {
    name: string;
    duraction: number;
    educator: string;
}

class CreateCourseService {

    execute({name,duraction,educator}:Course){
        console.log(name, duraction,educator);
    }
  
}
export default new CreateCourseService();