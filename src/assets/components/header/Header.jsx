import React, { useState } from "react";
import './header.css'
function Header() {
  const headerItems = ["home", "products", "pricing", "about us"];
  const [selected, setSelected] = useState('');
  console.log(selected);
  return (
    <header className="header-container bg-slate-100 shadow-md h-[5rem] flex justify-between items-center w-full">
      <div>
        <ul className="flex mx-11">
          {headerItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`mx-10 cursor-pointer ${selected ==item ? 'active' : 'de-active'}`}
                onClick={() => setSelected(item)}
              >
                {item.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
      
    </header>
  );
}

export default Header;
