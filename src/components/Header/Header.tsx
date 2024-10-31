import { FC } from "react";
import NavBar from "./Navbar";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Header: FC = () => ( 
     <header className="bg-gray-900 text-white">
        <NavBar />
        <SearchBar />
        <UserMenu />
    </header>
)

export default Header;