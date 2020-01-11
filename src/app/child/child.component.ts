import {Input} from '@angular/core';
import { Component, Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child',
  template:` <br> count is {{count}} <br>
              <button (click) = increment()>click</button>` ,
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
 {
  
  @Input()
  count:number;
  message="hi janu!!";//view child
  constructor(){}
  meghana="padma"
  @Output() countChange:EventEmitter <number> = new EventEmitter();//@output
  c=0;
  increment()
  {
    this.c++;
    this.countChange.emit(this.c);
  }//@output
}
