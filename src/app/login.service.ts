import {	Injectable	} from '@angular/core';
import {	LoginModel	} from './loginmodel';

@Injectable()
export class LoginService{
	
	authenticate(model: LoginModel): boolean {
		return true;		
	}
}