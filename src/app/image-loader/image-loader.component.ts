import {Component,
        bind,
        Injectable,
        Inject} from '@angular/core';
import {Http,
        Response} from 'angular2/http';

export var RIJKSMUSEUM_API_KEY: string = 'iewuYh26';
export var ENGLISH_LANGUAGE: string = 'en';


@Component({

    selector: 'image-loader',  // <image-loader></image-loader>

    providers: [],

    directives: [],

    pipes: [],

    styles: [],

    template: require('./image-loader.html')
})

@Injectable()
export class ImageLoader {

    data:Object;
    loading:Boolean;

    imageUrl:String =  'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7sM=s0';

    url:String =  'https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?key=iewuYh26&format=json';


    artObjects:any;

    Q:String = 'rembrant';

   // arequest:String = 'https://www.rijksmuseum.nl/api/' + language + '/collection?' + key  + '&format=json';




    constructor(public http: Http,
                @Inject(RIJKSMUSEUM_API_KEY) private apiKey: string,
                @Inject(ENGLISH_LANGUAGE) private language: string ) {
    }

    makeRequest():void {
        this.loading = true;

        let query:String = 'Rembrant';

        let request:String = `https://www.rijksmuseum.nl/api/${this.language}/collection?q=${query}&key=${this.apiKey}&format=json`;

        this.http.request(request)
            .subscribe((res:Response) => {
                this.data = res.json();

                console.log('data', this.data.artObjects);

                this.artObjects = this.data.artObjects;
                this.loading = false;
            });
    }

}

export var apiServiceInjectables: Array<any> = [
    bind(RIJKSMUSEUM_API_KEY).toValue(RIJKSMUSEUM_API_KEY),
    bind(ENGLISH_LANGUAGE).toValue(ENGLISH_LANGUAGE),
];