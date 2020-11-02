import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ( {toRemove, todolist} ) => {
    const renderList = todolist.map( (task, index) => {
        // console.log(index);
        return <TodoItem toRemove={toRemove} key={index} id={index} task={task} />
    });

    return (
        <div className="">{ renderList }</div>
    );
}

export default TodoList;