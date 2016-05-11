import {Component, ViewEncapsulation} from '@angular/core';

/*
 * Component
 * F9ImageLoader is a simple Component
 */
@Component({
    selector: 'f9-image-loader',
    styles: [],
    template: `
    <md-content>
        <p>TODO</p>
    </md-content>
    `

})
export class F9ImageLoader {
    constructor() {
        console.log('Hi from the Loader!');
    }

    ngOnInit() {
        console.log('hello `Loader` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
}