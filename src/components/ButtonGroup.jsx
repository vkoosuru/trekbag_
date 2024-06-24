import Button from "./Button";
// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemStore";

export default function ButtonGroup() {
  const handleMarkAllAsComplete = useItemsStore(
    (state) => state.markAllAsComplete
  );
  const handleMarkAllAsInComplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const handleResetToInitial = useItemsStore((state) => state.resetToInitial);
  const handleRemoveAllItems = useItemsStore((state) => state.removeAllItems);
  //   const {
  //     handleMarkAllAsComplete,
  //     handleMarkAllAsIncomplete,
  //     handleResetToInitial,
  //     handleRemoveAllItems,
  //   } = useItemsContext();

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsInComplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
