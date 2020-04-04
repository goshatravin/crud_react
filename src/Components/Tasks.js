import React from 'react'

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
                        <div  className="collections" key={item.id}>
                            <span>{item.content}</span>
                            <button onClick={() => {deleteTask(item.id)}}>Delete</button>
                            <button onClick={() => {editTask(item)}}>Edite</button>
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