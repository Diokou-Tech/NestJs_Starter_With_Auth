import { Iuser } from "src/users/db/user.interface";

export class Session{
    user: Iuser;
    token: string;
}