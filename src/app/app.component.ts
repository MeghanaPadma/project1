import { ChildComponent } from './child/child.component';
import { Component, ViewChild, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',//use template and write the html code instead of specifying external file(template inline)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  count = 0;
  message:string
  name = "cvr";
  col :string
  getTitle():string
  {
    return this.title;
  }
  @ViewChild(ChildComponent,null) child;//message
  
  Increment()
  {
    this.count++;
  }
  Decrement()
  {
    this.count--;
  }
  constructor(){}
  ngAfterViewInit()
  {
    this.message=this.child.message;

  }
  display(c:number)
  {
    console.log(c)
  }


}
