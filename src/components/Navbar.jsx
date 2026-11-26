import { useLocation } from "react-router-dom";
import PillNav from "./PillNav";
import TechText from "./TechText";

function Navbar() {
  const location = useLocation();

  const items = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Interactions", href: "/stuff" }
  ];

  return (
    <header className="site-nav">
      <PillNav
        animatedBrand={<TechText text="KAVIJFR" fontSize={42} />}
        items={items}
        activeHref={location.pathname}
        baseColor="#050505"
        pillColor="#f5f5f5"
        pillTextColor="#050505"
        hoveredPillTextColor="#f5f5f5"
        initialLoadAnimation
      />
    </header>
  );
}

export default Navbar;
