/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div className="w-52 h-fit bg-white p-5 rounded-xl space-y-5 sticky top-5">
      <NavLink
        to="/all-products"
        className="btn btn-block bg-myPurple text-white rounded-3xl"
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.category}
          className="btn btn-block rounded-3xl"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
