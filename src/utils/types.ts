export interface ProductProps {
  id: number | string;
  productIMG: any;
  productIMGS: string[];
  productname: string;
  productdescription: string;
  productprice: number;
  productrating: number;
  productquantity: number;
  category: string;
  like: number;
  location: string;
  slug: string;
  ownernumber: number | string;
  owneremail: string;
  time: string | number;
  condition: string;
}

export interface CommonProps {
  id: number;
  name: string;
  url: string;
}
