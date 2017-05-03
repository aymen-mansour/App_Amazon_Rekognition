import { Component } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'app.component.html'
})



export class LoginComponent {



    constructor(private http:Http,private router: Router) { }



    getData()
    {
        var path='http://34.201.238.20:5000/login';




       (res =>{


                if (this.data == true)
                {
                    this.router.navigate(['./_facialanalysis']);

                }

    }
    );
    }






}
