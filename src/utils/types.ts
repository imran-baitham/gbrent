export interface ProductProps {
  id: number;
  productIMG: any;
  productIMGS: any;
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
  availability: string;
}

export interface StaticProps {
  ProductData: ProductProps[];
}

export interface CommonProps {
  id: number;
  name: string;
  url: string;
}
