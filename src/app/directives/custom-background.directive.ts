import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
selector: "[appCustomBackground]"
})
export class CustomBackgroundDirective implements OnInit {
    @Input() defaultColor: string = 'white';
    @Input('appCustomBackground') highlightColor: string = 'lightgrey';

    // @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;
    @HostBinding('style.backgroundColor') bgColor: string;

constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    
ngOnInit(): void {
    this.bgColor = this.defaultColor;
// this.elementRef.nativeElement.style.backgroundColor = 'lightgrey';
//   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgrey')
}

@HostListener('mouseenter') onMouseEnter(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgrey')
    // this.bgColor = 'lightgrey';
    this.bgColor = this.highlightColor;
}

@HostListener('mouseleave') onMouseLeave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
    // this.bgColor = 'white';
    this.bgColor = this.defaultColor;
}
}