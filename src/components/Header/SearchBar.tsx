import { FC } from "react";

const SearchBar: FC = () => (
    <div className="flex justify-center mt-4">
        <input 
        type="text" 
        className="w-3/4 p-2 border border-gray-300 focus:outline-none focus:border-blue-500" 
        placeholder="Search for products..."
        />
    </div>
)

export default SearchBar;