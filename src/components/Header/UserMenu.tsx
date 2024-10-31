// components/Header/UserMenu.tsx
import React from 'react';

const UserMenu: React.FC = () => {
    return (
        <div className="flex items-center justify-end space-x-4">
            <button className="text-white bg-blue-500 hover:bg-blue-700 p-2 rounded">Sign In</button>
            <button className="text-white bg-gray-700 hover:bg-gray-900 p-2 rounded">Sign Out</button>
        </div>
    );
};

export default UserMenu;
