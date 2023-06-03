type Route = {
  id: number;
  label: string;
  href: string;
  introduction: string;
};

export const routes: Route[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
    introduction: "",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
    introduction: "More about me",
  },
  {
    id: 3,
    label: "Posts",
    href: "/posts",
    introduction: "Read my blog posts",
  },
  {
    id: 4,
    label: "Projects",
    href: "/projects",
    introduction: "Check pet projects I created for fun",
  },
  {
    id: 5,
    label: "Wardrobe",
    href: "/wardrobe",
    introduction: "Clothes made by me",
  },
];
