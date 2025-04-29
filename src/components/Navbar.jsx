import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={null}>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Tated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
