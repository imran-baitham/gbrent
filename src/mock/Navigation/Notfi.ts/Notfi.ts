import imageone from "../../../../public/assets/e2ehotelware-latest.png";
import bannerthree from "../../../../public/assets/adsense/banner21.png";
import bannerfore from "../../../../public/assets/adsense/banner13.png";

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
