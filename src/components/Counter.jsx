// import { useItemsContext } from "../lib/hooks";

import { useItemsStore } from "../stores/itemStore";

export default function Counter() {
  // const { items } = useItemsContext();
  const items = useItemsStore((state) => state.items);

  let t = items.length,
    co = 0;
  {
    items.map((item) => {
      if (item.packed === true) {
        co++;
        return;
      }
    });
  }
  return (
    <p>
      <b>{co}</b> / {t} items packed
    </p>
  );
}
