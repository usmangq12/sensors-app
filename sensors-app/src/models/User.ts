export interface UserLogin {
    username: string;
    password: string;
}

export interface IUser {
    Id?: string;
    Username: string;
    Password: string;
}

export class User implements IUser {
    Username = ""
    Password = ""
}