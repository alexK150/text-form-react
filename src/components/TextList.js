import React, {useState} from 'react';
import TextItem from "./TextItem";
import SettingsBar from "./SettingsBar";

function TextList(props) {
  const [listItems, setListItems] = useState([]);
  const [currentListItem, setCurrentListItem] = useState(null);

  // Handler for all inputs
  const handleChange = (val, param) => {
    const list = [...listItems];
    const item = list[currentListItem];
    if (param === 'text') {
      item.text = val;
    } else if (param === 'color') {
      item.color = val;
    } else if (param === 'fontSize') {
      item.fontSize = val;
    } else if (param === 'bgc') {
      item.backgroundColor = val;
    }
    setListItems(list);
  }

  // Adding item
  const addText = () => {
    let prevLen = listItems.length;
    setListItems([...listItems, {
      id: Date.now(),
      text: '',
      color: 'black',
      fontSize: '14',
      backgroundColor: 'white'
    }]);
    setCurrentListItem(prevLen);
  }

  // Deleting item
  const deleteItem = (itemId) => {
    setListItems(listItems.filter(el => el.id !== itemId))
  }

  // Update Item
  const updateItem = (i) => {
    setCurrentListItem(i);
  }

  return (
    <div>
      <h3>TextList</h3>
      <div className='main-blocks'>
        {currentListItem != null &&
        <SettingsBar item={listItems[currentListItem]} handleChange={handleChange}/>
        }
        <button onClick={addText} className='add-btn'>AddText</button>
        <section className='list-items'>
          {listItems.map((el, i) =>
            <TextItem key={el.id} item={el} updateItem={() => updateItem(i)} deleteItem={deleteItem}
                      handleChange={handleChange}/>
          )}
        </section>
      </div>
    </div>
  );
}

export default TextList;