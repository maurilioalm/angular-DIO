import { NgModule } from '@angular/core';
import { StarComponent } from './component/star/star.component';

@NgModule({
  declarations:[
    StarComponent
  ],
  exports: [
    StarComponent
  ]
})
export class StarModule{

}
