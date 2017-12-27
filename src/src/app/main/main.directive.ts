import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'section'
})
export class MainDirective {
    constructor(private el: ElementRef,
                private renderer: Renderer,
                private router: Router){
        console.log(el, renderer);
    }
    // @HostListener('click') showButton($event) {
    //     const getSection = function (el) {
    //         return el.nodeName === 'SECTION';
    //     };
    //     console.log($event);
    //     const selected = e.path.filter(getSection)[0].classList[1];

    //     Array.from(document.querySelectorAll('.botSvg')).forEach((el, i, arr) => { el.classList.remove('selected'); });
    //     // document.querySelectorAll('.botSvg').forEach(classList.remove('selected'));
    //     console.log(selected, document.querySelector('Svg.' + selected));
    //     document.querySelector('Svg.' + selected).classList.add('selected');
    // }

    @HostListener('click') showButton() {
        const classList = this.el.nativeElement.classList;

        if (classList.contains('selected')) {
            if (classList.contains('b1')) {
                this.router.navigate(['/chat']);
            } else if (classList.contains('b2')) {
                this.router.navigate(['/chat2']);
            }
        }
        classList.add('selected');
    }

    @HostListener('mouseout') hideButton() {
        const classList = this.el.nativeElement.classList;
        classList.remove('selected');
    }
}
