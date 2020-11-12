import { Component, OnInit } from '@angular/core';
import {Course} from './course';

@Component ({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/imagens/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.4,
                releaseDate:'December, 2, 2019'
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                imageUrl: '/assets/imagens/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    
    }
