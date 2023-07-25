import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group dashboard-menu">
        <h4 className="text-xl font-bold mb-6"> ADMIN PANEL</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="block py-2 px-4 mb-2 text-black-800 hover:bg-blue-100 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="block py-2 px-4 mb-2 text-black-800 hover:bg-blue-100 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="block py-2 px-4 mb-2 text-black-800 hover:bg-blue-100 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="block py-2 px-4 mb-2 text-black-800 hover:bg-blue-100 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          Orders
        </NavLink>
        {/* <NavLink
          to="/dashboard/admin/users"
          className="block py-2 px-4 mb-2 text-blue-800 hover:bg-blue-100 rounded"
          activeClassName="bg-blue-500 text-white"
        >
          Users
        </NavLink> */}
      </div>
    </div>
  );
};

export default AdminMenu;
