import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
 const {onItemFormSubmit} = props;
 const [newItem , setNewItem] = useState("");
 const [itemCategory, setItemCategory] = useState("Produce");

 function handleNewItem(event){
  setNewItem(event.target.value)
 }
 function handleNewCategory(event){
  setItemCategory(event.target.value)
 }
 function handleSubmit(event) {
  event.preventDefault();
  const newItemObj ={
    id: uuid(),
    name: newItem,
    category: itemCategory,
  }
 onItemFormSubmit(newItemObj)

 setNewItem("");
 setItemCategory("Produce");
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem} onChange={handleNewItem} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
