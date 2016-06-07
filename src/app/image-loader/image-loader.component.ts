import {Component,
    bind,
    ElementRef,
    OnInit,
    Injectable,
    Inject} from '@angular/core';
import {Http, Response} from '@angular/http';

import {MdCard} from '@angular2-material/card';

export var RIJKSMUSEUM_API_KEY:string = 'iewuYh26';
export var ENGLISH_LANGUAGE:string = 'en';

import {SearchBox} from '../search-box';

@Component({

    selector: 'image-loader',  // <image-loader></image-loader>

    providers: [],

    directives: [SearchBox, MdCard
    ],

    pipes: [],

    styles: [ require('./image-loader.scss') ],

    template: require('./image-loader.html')
})

@Injectable()
export class ImageLoader {

    data:any;

    loading:Boolean;

    artObjects:any;

    constructor(public http:Http,
                @Inject(RIJKSMUSEUM_API_KEY) private apiKey:string,
                @Inject(ENGLISH_LANGUAGE) private language:string) {
    }

    makeRequest(query):void {
        this.loading = true;

        let request:any = `https://www.rijksmuseum.nl/api/${this.language}/collection?q=${query}&key=${this.apiKey}&format=json`;

        this.http.request(request)
            .subscribe((res:Response) => {
                this.data = res.json();

                console.log('data', this.data.artObjects);

                this.artObjects = this.data.artObjects;
                this.loading = false;
            });
    }

}


export var apiServiceInjectables:Array<any> = [
    bind(RIJKSMUSEUM_API_KEY).toValue(RIJKSMUSEUM_API_KEY),
    bind(ENGLISH_LANGUAGE).toValue(ENGLISH_LANGUAGE),
];