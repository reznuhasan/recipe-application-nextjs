import HeaderSearch from "./headerSearch";
import List from "./list";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
          <nav class="flex justify-between items-center">
            <Logo/>
            <List/>
            <HeaderSearch/>
          </nav>
    </div>
  )
}
