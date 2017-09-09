import {	Component, OnInit	} from '@angular/core';
import {	LoginModel	} from './loginmodel';
import {	LoginService	} from './login.service';
import {	DashboardComponent	} from './dashboard.component';
import {	Router	} from '@angular/router';

@Component({
selector:'login',
template:`
<div>
<input [(ngModel)]="login.username" placeholder="username"/>
<input [(ngModel)]="login.password" placeholder="password"/>
<input type="submit" (click)="authenticateUser(login)" name="Login"/>
</div>`,
styleUrls:[],
providers:[LoginService]
})

export class LoginComponent implements OnInit{
title:'Please enter your credentials to login..';
login: LoginModel={
username:'',
password:''
}

constructor (private loginService: LoginService, private router : Router){}
ngOnInit():void{}

authenticateUser(model: LoginModel): void {
if(this.loginService.authenticate(model))
	this.router.navigate(['/dashboard'])
}

}