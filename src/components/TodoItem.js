import React from 'react'

function TodoItem({
  description,
  completed = false, // If not passed, default to 'false'
  ontoggleCompleted
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={ completed }
        onChange={
          (event) => {
            console.log('Clicked Checknox', description);
            // when user clicks check box
            ontoggleCompleted();
          }
        }
      />
      { description }
    </label>
  )
}

export default TodoItem