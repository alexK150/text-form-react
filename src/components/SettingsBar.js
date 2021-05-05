import React from 'react';

function SettingsBar({item, handleChange}) {
  return (<div className='settings-bar'>
    <h4>SettingsBar</h4>
    <input value={item && item.text} onChange={(e) => handleChange(e.target.value, 'text')}/>
    <input value={item && item.color} placeholder='Color' onChange={(e) => handleChange(e.target.value, 'color')}/>
    <input value={item && item.fontSize} type='number' placeholder='Font-Size'
           onChange={(e) => handleChange(e.target.value, 'fontSize')}/>
    <input value={item && item.backgroundColor} placeholder='Background Color'
           onChange={(e) => handleChange(e.target.value, 'bgc')}/>
  </div>);
}

export default SettingsBar;