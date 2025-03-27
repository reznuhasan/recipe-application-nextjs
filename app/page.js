import HandCollections from "./components/handCollections";
import HeroPart from "./components/heroPart";
import LastestRecipe from "./components/lastestRecipe";
import PopularCategories from "./components/popularCategories";
import SuperDelicious from "./components/superDelicious";

export default function Home() {
  return (
    <div className="container mx-auto px-4 mt-[100px]">
      <HeroPart/>
      <SuperDelicious/>
      <PopularCategories/>
      <HandCollections/>
      <LastestRecipe/>
    </div>
  );
}
