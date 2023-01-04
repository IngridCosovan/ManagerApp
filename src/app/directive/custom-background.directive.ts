import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: "[appCustomBackground]"
})

export class CustomBackgroundDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'light-grey';
  }
//-injection folosim pentru a obtine instante ale unor clase in clasa unde avem nevoie
  // de o instanta,
  //element ref ia elementul din template-ul html si il aduce aici si aplica directiva.
}
