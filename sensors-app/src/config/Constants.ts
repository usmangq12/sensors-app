export interface IMenuItems {
    title: string;
    route: string;
}

export const menuItems: IMenuItems[] = [
    {title: "Home", route: "/home"},
    {title: "Login", route: "/login"},
    {title: "SignUp", route: "/sign-up"}
]