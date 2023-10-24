import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] =useState("");
  const [itemList, setItemList] = useState(items);

  function handleFilterChange(event){
     
    setSearch(event.target.value)}
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleItemFormSubmit(newItem) {
    // Update the state by creating a new array with the new item
    setItemList([...itemList, newItem]);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") {
      if(search === ""){
        return true;
      }
      else{
        return item.name.toLowerCase().includes(search.toLowerCase());
      }
  
     
    }
  
     else {
        if (search===""){
        return item.category === selectedCategory;
       }
    else{
      return  item.name.toLowerCase().includes(search.toLowerCase())
    }
  
   
  } 
  

 
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleFilterChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
