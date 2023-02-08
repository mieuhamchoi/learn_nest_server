import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private user = {
        name: 'test',
        age: 25
    }
    public getUser() {
        return this.user;
    }
}
