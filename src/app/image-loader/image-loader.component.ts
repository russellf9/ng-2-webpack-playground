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

    imageUrl:String =  'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7sM=s0';

    url:String =  'https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?key=iewuYh26&format=json';

    key:String = 'iewuYh26';

    language;String = 'en';

    artObjects:any;

    Q:String = 'rembrant';

   // arequest:String = 'https://www.rijksmuseum.nl/api/' + language + '/collection?' + key  + '&format=json';

    request:String = 'https://www.rijksmuseum.nl/api/en/collection?q=Rembrant&key=iewuYh26&format=json';


    constructor(public http: Http) {
    }

    makeRequest():void {
        this.loading = true;
        this.http.request(this.request)
            .subscribe((res:Response) => {
                this.data = res.json();
               // this.artObjects = res.artObjects.json();

                console.log('data', this.data.artObjects);

                this.artObjects = this.data.artObjects;
                this.loading = false;
            });
    }

}