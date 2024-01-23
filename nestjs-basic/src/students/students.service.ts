import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    getStudents() {
        return [
            {
                id: 1,
                name: "Ayesha",
                course: "BSCS",
                email: "ayesha2024@gmail.com",
                number: "kokab2017@gmail.com",
            },
            {
                id: 2,
                name: "Kokab",
                course: "Web development",
                email: "kokab2024@gmail.com",
                number: 1243546298,
            },
            {
                id: 3,
                name: "Ayesha",
                course: "UI/UX",
                email: "ayesha2024@gmail.com",
                number: 16876546298,
            },
            {
                id: 4,
                name: "Kokab",
                course: "Mobile app deveolpment",
                email: "kokab2024@gmail.com",
                number: 1243546298,
            },
            {
                id: 5,
                name: "Ayesha",
                course: "web app development",
                email: "ayesha2024@gmail.com",
                number: "kokab2017@gmail.com",
            },
        
            
        ]
    }
}
