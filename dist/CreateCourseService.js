"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{ /*
    nome - string
    duraction -number
    intructor - string

*/
}
class CreateCourseService {
    execute({ name, duraction, educator }) {
        console.log(name, duraction, educator);
    }
}
exports.default = new CreateCourseService();
