import imageone from "../../../../public/assets/e2ehotelware-latest.png";
import imagethree from "../../../../public/assets/e2ehotelware-latest2.webp";
import bannerthree from "../../../../public/assets/adsense/banner21.png";
import bannerfore from "../../../../public/assets/adsense/banner13.png";
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
  {
    id: 2,
    image: bannerfore,
    url: "/",
  },
  {
    id: 3,
    image: bannerthree,
    url: "/",
  },
];
