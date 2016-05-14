import {Component,
    Input,
    bind,
    ElementRef,
    OnInit,
    Injectable,
    Inject} from '@angular/core';
// Search Box
/**
 * SearchBox displays the search box and emits events based on the results
 */

@Component({
    selector: 'search-box',
    template: `
    <md-input-container>
        <input type="text"
        name="query"
        #query
        class="md-input"
        placeholder="Search"
        autofocus>
    </md-input-container>
  `
})
export class SearchBox implements OnInit {

    constructor() {
    }

    ngOnInit():void {
    }
}