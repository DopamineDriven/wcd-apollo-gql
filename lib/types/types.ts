// import { Collection, ObjectId } from "mongodb";
// import { User } from "../viewer.graphql";
export type DateIsoString = string;

export type UriString = string;

export interface Post {
    // _id: ObjectId;
    id: string;
    date: DateIsoString;
    title: string;
    lead: string;
    content: string;
    image: UriString;
    github: UriString;
    twitter: UriString;
    linkedin: UriString;
}