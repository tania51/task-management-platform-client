import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


const NavList =
    <div className="text-black">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
    </div>

{/* <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List> */}




// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
//       </Typography>
//       <NavListMenu />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           Contact Us
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }

function HeaderNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Material Tailwind
                </Typography>
                <div className="hidden lg:block">
                    {NavList}
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm">
                        Sign In
                    </Button>
                </div>
            </div>
            <Collapse className="lg:hidden" open={openNav}>
                {NavList}
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default HeaderNavbar;