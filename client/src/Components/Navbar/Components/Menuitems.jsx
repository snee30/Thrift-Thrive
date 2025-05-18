import { Link, NavLink } from "react-router-dom";
import { items } from "./items";

export default function Menuitems() {
  return (
    <ul className=" flex flex-col md:flex-row justify-center h-full gap-15 items-center">
      {/* Listing items of data */}
      {items.map((item, index) => (
        <li
          key={index}
          className="hover:text-[var(--darksage)] text-[var(--darkbrown)]"
        >
          <NavLink to={item.link}>{item.name}</NavLink>
        </li>
      ))}
      <Link
        to="/sell"
        className="bg-[var(--sage)] py-4 px-8 rounded-lg text-[var(--darkbrown)]"
      >
        Become a Seller
      </Link>
    </ul>
  );
}
