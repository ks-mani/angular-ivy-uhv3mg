import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[divSizeOnMouseHover]"
})
export class DivSizeDirective implements OnInit {
  // @Input()
  // private animationType: string;

  @Input("divSizeOnMouseHover")
  private animationType: string;

  @Input()
  private timer: string;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.width = "60%";
    this.elRef.nativeElement.style.height = "60%";
  }

  @HostBinding("style.animation")
  private bubbleAnimation;

  @HostBinding("style.animation-direction")
  private bubbleAnimationDirection;

  @HostListener("mouseover")
  onMouseOver() {
    // Setting the animation using elRef Native Property
    // this.elRef.nativeElement.style.animation = "div-bubble 3s infinite";
    // this.elRef.nativeElement.style.animationDirection = "alternate";

    // Setting the animation using Host Binder
    // this.bubbleAnimation = "div-bubble 3s infinite";
    // this.bubbleAnimationDirection = "alternate";

    // Setting the animation using Input passed to the directive
    this.bubbleAnimation = `${this.animationType} ${this.timer} infinite`;
    this.bubbleAnimationDirection = "alternate";
  }

  @HostListener("mouseout")
  onMouseOut() {
    // this.elRef.nativeElement.style.animation = "";
    // this.elRef.nativeElement.style.animationDirection = "";

    this.bubbleAnimation = "";
    this.bubbleAnimationDirection = "";
  }
}
