import ListItem from "./listItem";

export default function List() {
  return (
    <ul className="hidden md:flex space-x-6">
      <ListItem path={"/"} activation={true}>Home</ListItem>
      <ListItem path={"/dist/categories"} activation={true}>Categories</ListItem>
      <ListItem path={"/dist/latest-recipes"} activation={true}>Latest Recipes</ListItem>
    </ul>
  )
}
