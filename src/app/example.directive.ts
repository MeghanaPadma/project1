import { Directive,ElementRef ,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {
  @Input() color :string;

  constructor( private elementRef : ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "white"
    
    
   }
   @HostListener('mouseenter') onMouseEnter(color:string)
   {
     this. elementRef.nativeElement.style.backgroundColor=this.color;
    }

}
