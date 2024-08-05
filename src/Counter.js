import { useState } from 'react';
import Todo from './Todo';
import './Assests.css';

const Counter = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <>
            <div className="card">
                <div className="header">
                    <div className="content">
                        {/* <span className="title">{count}</span> */}
                        <div className="actions ">
                            <input type="text" name="text" class="input" placeholder="write new task here..." value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} />
                            <button type="button" className=" history"  onClick={addTodo}><p>New Task</p></button>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div>
                            {todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    todo={todo}
                                    index={index}
                                    toggleTodo={toggleTodo}
                                    deleteTodo={deleteTodo}
                                />
                            ))}
                        </div>
        </>

    );
}

export default Counter;