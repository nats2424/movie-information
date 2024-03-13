import React from "react";
import Link from "next/link";
function Sidebar() {
  return (
    <div className="px-10 border-r border-white min-h-screen fixed">
      <ul className="px-2 py-3 font-medium text-white-900">
        <Link href="/">
          <li className="block px-2 py-3 text-2xl">TOP</li>
        </Link>
        <li className="block px-2 py-3 text-2xl">邦画</li>
        <li className="block px-2 py-3 text-2xl">洋画</li>
      </ul>
    </div>
  );
}

export default Sidebar;
