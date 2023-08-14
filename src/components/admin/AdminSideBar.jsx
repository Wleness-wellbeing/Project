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
              to={value[1]}
              className="my-2 text-right block admin-link-hover font-medium"
            >
              {value[0]}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}
