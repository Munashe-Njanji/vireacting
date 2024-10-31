import { FC } from "react";

const NavBar: FC = () => {
    return(
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">Vireact Store</div>
                <div>
                    <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
                    <a href="/products" className="text-gray-300 hover:text-white mx-2">Products</a>
                    <a href="/cart" className="text-gray-300 hover:text-white mx-2">Cart</a>
                </div>
            </div>
        </nav>
    )
} 

export default NavBar;