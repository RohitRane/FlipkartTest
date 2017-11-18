export interface Note {
    text:string;
    children:Array<Note>;
    show:boolean;
    nid:string;
}
