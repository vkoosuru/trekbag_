import { useItemsStore } from "../stores/itemStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
// import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  // const { handleAddItem } = useItemsContext();
  const handleAddItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup />
    </div>
  );
}
