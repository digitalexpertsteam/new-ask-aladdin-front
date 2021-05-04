export interface Category {
    id:string;
    title:String;
    destination_name:String;
    destination_slug:string;
    categories:[{
        id:string;
        name:string;
        slug:string
    }]
}
