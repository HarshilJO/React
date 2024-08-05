import React from 'react';
const Todo=({ todo, index, toggleTodo, deleteTodo })=>{
    return ( 
        <>
            <div className="task" id="checklist">
                <input value="2" name="r" type="checkbox" id="02" onClick={() => toggleTodo(index)} />
                <label htmlFor="02">{todo.text}.</label>
                <button type="button" className="dismiss" onClick={() => deleteTodo(index)}>×</button>
            </div>
        </>
     );
}
 
export default Todo;