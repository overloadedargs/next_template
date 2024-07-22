import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>

        <div className="flexContainer">
            <ul>
                <li className="flexItem">
                    <Link href="/">Home</Link>
                </li>
                <li className="flexItem">
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="flexItem">
                    <Link href="/article">Articles</Link>
                </li>
                <li className="flexItem">
                    <Link href="/table">Table</Link>
                </li>
            </ul>  
         </div> 
       </nav>
    </div>
  );
};

export default Header;