import React from "react";
import { Link } from "react-router-dom";
import { adminSidebar } from "../../data/navigation";

export default function AdminSideBar() {
  return (
    <aside className="w-[200px] p-4 xl:p-6">
      <ul>
        {adminSidebar.map((value, i) => {
          return (
            <Link
              key={i}
              to={value[1]}
              className="admin-link-hover my-2 block text-right font-medium"
            >
              {value[0]}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}
