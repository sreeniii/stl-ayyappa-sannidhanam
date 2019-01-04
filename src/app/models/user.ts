export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

export class UpdateProfile {
    firstName: string;
    lastName: string;
}


export class CurrentUser {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    access_token: string;
}
