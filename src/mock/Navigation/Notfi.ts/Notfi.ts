import imageone from "../../../../public/assets/e2ehotelware-latest.png";
import imagethree from "../../../../public/assets/e2ehotelware-latest2.webp";
// import imagetwo from "../../../../public/assets/e2ehotelware-latest1.jpg";

interface CommonProps {
  id: number;
  image: any;
  url: string;
}

export let Notfi: CommonProps[] = [
  {
    id: 1,
    image: imageone,
    url: "/",
  },
  // {
  //   id: 2,
  //   image: imagetwo,
  //   url: "/",
  // },
  {
    id: 3,
    image: imagethree,
    url: "/",
  },
];
