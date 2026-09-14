import React, { useState } from 'react'

function ResizeSquare(){
  const [size, setSize] = useState(240)

  const handleChange = (e) =>{
    const newSize = Number(e.target.value)
    setSize(newSize)
  }

  return(
    <div style={{padding: '40px', fontFamily: 'Arial, sans-serif'}}>
      <h2>Select square size:</h2>

      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
        <input
          type="range"
          min="20"
          max="500"
          value={size}
          onChange={handleChange}
          style={{width: '300px'}}
        />
        <span>{size}px : {size}px</span>
      </div>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: '#3b82f6',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
    </div>
  )
}

export default ResizeSquare