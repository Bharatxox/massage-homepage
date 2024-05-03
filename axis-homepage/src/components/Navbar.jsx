import { useState } from "react";
const Navbar = () => {
  const list = ["HOME", "ABOUT", "SERVICES", "FAQ", "CONTACT"];
  const [toggle, settoggle] = useState("HOME");
  return (
    <nav className="relative w-full flex flex-col items-start gap-2 bg-white">
      <h1 className="text-primary font-normal pt-2 pl-5">Family Wellness</h1>
      <h4 className="text-primary font-bold tracking-wider pb-7 pt-2 pl-5">
        MASSAGE THERAPY
      </h4>
      <ul className="flex list-none justify-between w-full px-4 mb-4">
        {list.map((e) => (
          <li
            key={e}
            className={`${
              toggle === e ? "bg-primary" : "bg-gray"
            } w-1/5 py-3 hover:bg-primary font-bold`}
            onClick={() => settoggle(e)}
          >
            {e}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
