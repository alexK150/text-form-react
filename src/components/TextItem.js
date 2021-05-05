import React from 'react';

function TextItem({item, deleteItem, updateItem}) {
  return (
    <div className='text-item' onClick={updateItem}>
      <div
        style={{
          color: item.color,
          backgroundColor: item.backgroundColor,
          fontSize: item.fontSize + 'px'
        }}>{item.text}</div>
      <button onClick={() => deleteItem(item.id)} className='delete-btn'>Delete</button>
    </div>
  );
}

export default TextItem;