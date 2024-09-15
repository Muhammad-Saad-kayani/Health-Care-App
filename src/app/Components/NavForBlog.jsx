"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

const NavForBlog = () => {
  return (
    <nav className="w-full bg-white py-5 px-10 flex flex-wrap gap-2 fixed top-0 z-50">
      <section className="navsec w-full flex items-center justify-between mb-2">
        <section className="logo flex items-center gap-2">
          <div>
            <img src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <div className="text-xl font-semibold font-sans">Healthwire</div>
        </section>
        <div className="btnCart flex items-center justify-between gap-8">
          <div className="cart text-black-900 hover:scale-105 transition-transform duration-300">
            <a className="hover: text-blue-900" href="#"><FontAwesomeIcon icon={faBars} className="size-4" /></a>
          </div>
          <div className="cart text-blue-900">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavForBlog;
