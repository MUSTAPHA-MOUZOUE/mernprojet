import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 py-6" style={{ borderBottomColor: "#FFA500" }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 ml-12"
        >
          MOZS-Hop.com
        </Link>
        <div className="md:hidden ">
          <MobileNav />
        </div>
        <div className="hidden md:block">
            <MainNav></MainNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
