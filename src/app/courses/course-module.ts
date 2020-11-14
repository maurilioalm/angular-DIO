import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appPipeModule } from '../shared/pipe/app-pipe.module';
import { StarModule } from '../shared/star.module';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course.info.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    appPipeModule,
    RouterModule.forChild([
          {
            path: 'courses', component: CourseListComponent
          },
          {
            path: 'courses/info/:id', component: CourseInfoComponent
          }
      ])
     ]
})
export class CourseModule{

}
