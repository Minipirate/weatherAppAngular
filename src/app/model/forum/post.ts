import { Heading } from "./heading";
import { Message } from "./message";
import { User } from "../users/user";


export interface Post {
    id : number;
    title : string;
    date : Date; 
    heading : Heading;
    message : Message[];
    user : User;
}
