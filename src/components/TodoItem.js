import React from 'react';
import './TodoItem.css';
import 'font-awesome/css/font-awesome.min.css';

const TodoItem = ( {toRemove, id, task} ) => {
   return (
        <div className="todo-item">
            <div className="todo-task">
                {task}
            </div>
            <i onClick={ () => toRemove(id) } className="trash icon item-icon"></i>
        </div>
   );
};


/*  ************    Delete Icon Options     ****************            
    <i  className="fa fa-trash-o item" aria-hidden="true"></i>
    <i onClick={ () => toRemove(id) } className="fa fa-trash item" aria-hidden="true"></i> 
    <i onClick={ () => toRemove(id) } className="trash alternate icon item-icon"></i>
*/

export default TodoItem;


