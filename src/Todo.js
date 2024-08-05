import React from 'react';
const Todo=({ todo, index, toggleTodo, deleteTodo })=>{
    return ( 
        <>
           <div className="task" id="checklist">
    <input 
        value="2" 
        name="r" 
        type="checkbox" 
        id="02" 
        onClick={() => toggleTodo(index)} 
    />
    <label 
        htmlFor="02" 
        style={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            flex: '1'
        }}
    >
        {todo.text}
    </label>
    <button 
        type="button" 
        className="dismiss" 
        onClick={() => deleteTodo(index)}
    >x
    </button>
</div>

        </>
     );
}
 
export default Todo;