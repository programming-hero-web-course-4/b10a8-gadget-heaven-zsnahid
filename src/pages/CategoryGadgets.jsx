import { useParams } from "react-router-dom";

export default function CategoryGadgets() {
  const category = useParams();
  console.log(category);
  return <div>CategoryGadgets {category.category} </div>;
}
