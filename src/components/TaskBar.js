import React from 'react';
import './TodoItem.css';
import './TaskBar.css';

class TaskBar extends React.Component {
    state = { task: '' };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onInputSubmit(this.state.task);
    };

    render() {
        return(
            <div style={{ marginBottom:"5px" }} >
                <form onSubmit={ this.onFormSubmit } > 
                    <div className="task-bar">
                        <label> Enter Task : </label>
                        <input 
                            type="text"
                            value={ this.state.task }
                            onChange={ e => this.setState({ task: e.target.value }) }
                        />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default TaskBar;