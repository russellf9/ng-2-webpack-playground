import {Component} from '@angular/core';
import {Http, Response} from 'angular2/http';


@Component({

    selector: 'image-loader',  // <image-loader></image-loader>

    providers: [],

    directives: [],

    pipes: [],

    styles: [],

    template: require('./image-loader.html')
})

export class ImageLoader {

    data:Object;
    loading:Boolean;


    constructor(public http: Http) {
    }

    makeRequest():void {
        console.log('makeRequest')
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res:Response) => {
                this.data = res;
                this.loading = false;
            });
    }

}