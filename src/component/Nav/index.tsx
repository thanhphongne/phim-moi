import { useState } from "react";
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";

const defaultIconSize = '1.875rem'
const items = [
    {
        label: "Home",
        icon: <BiHomeAlt size={defaultIconSize} />,
        active: true,
    },
    {
        label: "Movie",
        icon: <BiMoviePlay size={defaultIconSize} />,
    },
    {
        label: "About",
        icon: <BiInfoCircle size={defaultIconSize} />,
    },
];

const NavItemsContainer = () => <>
    {items.map((item, index) => <NavItem item={item} key={index} />)}
</>

const Index = () => {
    const [isNavMenu, setIsNavMenu] = useState(false)
    return (
        <nav className="col-span-1 bg-cyan-200">
            <div className="flex mx-4 justify-between items-center md:block">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
                    Phimmoi.net
                </h4>
                <BiMenu size={defaultIconSize} className="cursor-pointer md:hidden" onClick={()=> setIsNavMenu(!isNavMenu)}/>
            </div>

            <ul className={`mx-4 my-2 ${isNavMenu ? '' : 'hidden'} md:block`}>
                <NavItemsContainer/>
            </ul>
        </nav>
    );
};

export default Index;
