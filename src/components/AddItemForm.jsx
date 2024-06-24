import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemtext] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemtext("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemtext(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add an item</Button>
    </form>
  );
}
