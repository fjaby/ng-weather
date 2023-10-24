import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  regexStr = '^[0-9]+$'

  constructor(private _el: ElementRef) { }

  @HostListener('keypress',['$event'])
  onKeyPress(event){
    return new RegExp(this.regexStr).test(event.key)
  }

  @HostListener('paste',['$event'])
  onPaste(event){
    this.validateFields(event)
  }

  @HostListener('blur',['$event'])
  onBlur(event){
    event.preventDefault();
    if(!this._el.nativeElement.value) {
      this._el.nativeElement.value = 0;
    }
  }

  validateFields(event: ClipboardEvent){
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text/plain').replace(/[^0-9]/g,'');
    document.execCommand('insertHTML',false,pasteData)
  }
}
