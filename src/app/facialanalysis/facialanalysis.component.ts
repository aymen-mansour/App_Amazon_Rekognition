import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'app.component.html'
})



export class FacialanalysisComponent  {

    private img="http://placehold.it/400x400?text=labels+pic";


    private name:any;
    private labels:any;
    public data:any;


    constructor(private http:Http,private router: Router) { }





     getData()
    {
        var path='http://34.201.238.20:5000/facialanalysis';


         .subscribe(res =>{






               // this.img="https://s3.amazonaws.com/ec2-34-201-238-20.compute-1.amazonaws.com" + "/" +this.name+".jpg";







                }
            );

    }






}
