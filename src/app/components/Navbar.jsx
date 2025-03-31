import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="flex  lg:text-lg justify-center gap-4">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    );
}
