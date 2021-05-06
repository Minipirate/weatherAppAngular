import { Post } from "./post";

export interface Message {
    id : number;
    content : string;
    date : Date;
    post : Post;
}