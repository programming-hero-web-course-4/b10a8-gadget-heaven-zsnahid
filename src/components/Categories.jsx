/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div className="w-52 h-fit bg-white p-5 rounded-xl space-y-5 sticky top-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn btn-block rounded-3xl transition ease-in-out duration-300 hover:bg-[#8332C5] hover:text-white ${
            isActive ? "bg-myPurple text-white" : ""
          }`
        }
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.category}
          className={({ isActive }) =>
            `btn btn-block rounded-3xl transition ease-in-out duration-300 hover:bg-[#8332C5] hover:text-white ${
              isActive ? "bg-myPurple text-white" : ""
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
