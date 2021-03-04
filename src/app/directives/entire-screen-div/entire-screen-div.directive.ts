import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: "[entireScreenDiv]"
})
export class EntireScreenDiv implements OnInit {
  private timerId: any;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.height = window.innerHeight - 16 + "px";
    this.elRef.nativeElement.style.width = "100%";
  }

  @HostListener("window:resize")
  onWindowResize() {
    if (this.timerId) clearTimeout(this.timerId);

    this.timerId = setTimeout(() => {
      this.elRef.nativeElement.style.height = window.innerHeight - 16 + "px";
    }, 10);
  }
}
