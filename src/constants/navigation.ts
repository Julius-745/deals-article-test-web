interface INavChild {
    title: string;
    link: string;
  }
  
  export interface INavigation {
    name: string;
    link?: string;
    children?: INavChild[];
  }
  
  export const Navigation: Array<INavigation> = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "https://dealls.com/about",
    },
    {
      name: "Register",
      link: "https://dealls.com/sign-up",
    },
  ];
  