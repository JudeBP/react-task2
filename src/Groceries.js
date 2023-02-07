import React from 'react'

/**
 * This is the component for the groceries 
 */

function Groceries({groceries}) {
  return (
    <div>
        <ul style={{fontWeight: 'normal', fontSize: '20px'}}>
        {groceries.map(grocery => {
            return (
                <li> {grocery} </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Groceries