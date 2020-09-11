import {Directive, EventEmitter, ElementRef, Output, HostListener} from '@angular/core';

@Directive({selector: '[fileSelect]'})
export class FileSelectDirective {

  protected element: ElementRef;

  @Output()
  fileSelect: EventEmitter<File[]> = new EventEmitter<File[]>();

  public constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('change')
  public onChange(): any {

    const files = this.element.nativeElement.files;
    this.fileSelect.emit(files);

  }
}
