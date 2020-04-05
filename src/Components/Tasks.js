import React from 'react'
import './Tasks.css'

class Tasks extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            taskList: '',
        }
    }
    handleData() {
        const { task }  = this.props;
        const { editTask } = this.props;
        const { deleteTask } = this.props;
        this.setState({
            taskList: (
                task.map((item) => {
                    return(
                        <div className="collections" key={item.id}>
                            <span className="collections-text">{item.content}</span>
                            <div className="btn-group">
                                <button className="btn-del" onClick={() => {deleteTask(item.id)}}>DELETE</button>
                                <button className="btn-edit" onClick={() => {editTask(item)}}>EDIT</button>
                            </div>
                        </div>
                    )
                })
            )
        })
    }
    componentDidMount() {
        this.handleData();
    }
    componentDidUpdate(previousProps, previousState) {
        if(previousProps.task !== this.props.task) {
            this.handleData();
        }
    }
    render() {
        return(
        <div className="tasks">{ this.state.taskList }</div>
        )
    }
}

export default Tasks;