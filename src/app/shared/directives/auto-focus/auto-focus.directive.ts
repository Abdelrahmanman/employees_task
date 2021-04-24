import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {
  
  @Input() public set autoFocus(value:boolean) {
    if (value) {
      this._ElementRef.nativeElement.focus();
    }
  }

  constructor(private _ElementRef: ElementRef) { }

}
