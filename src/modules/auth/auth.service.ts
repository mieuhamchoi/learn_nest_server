import { Injectable } from '@nestjs/common';
import {Auth} from './interfaces/auth.interface'
@Injectable()
export class AuthService {
    public auths: Auth[] = [];

    create(auth: Auth) {
        this.auths.push(auth);
    }
    
    findAll(): Auth[] {
        return this.auths;
    }
}
