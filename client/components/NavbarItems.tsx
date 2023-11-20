import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => (
    <div className="text-white hover:text-gray-300 cursor-pointer transition">
        {label}
    </div>
);

export default NavbarItem;
