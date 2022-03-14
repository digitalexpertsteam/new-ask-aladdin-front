export interface Hotel {
id: number;
name: string;
slug: string;
description:string;
thumb_alt: string;
thumb: string;
rate: number;
overview: string;
country: string;
banner_alt: string;
checkin: string;
checkout: string;
services:[{
   content:string;
}]
activities:[{
   content:string;
}]
amenities:[{
   content:string;
}]


location_map: string;
logo: string;
banner: string;
gallery: string;

}
