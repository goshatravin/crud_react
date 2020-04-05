import React from 'react';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
import './App.css'

class App extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {id: 1, content: 'Make shakshuka'},
                {id: 2, content: 'Take ipad from KSP deliver'}
            ],
            editing: false,
            currentUser: {id: null, content: ''}
        }
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.cancelChange = this.cancelChange.bind(this);
    }
    addTask(task) {
        task.id = this.state.data.length + 1
        let tasks = [...this.state.data, task];
        this.setState({
            data: tasks
        })
    }
    editTask(task) {
        this.setState({
            editing: true,
            currentUser: task
        })
    }
    updateUser(task) {
        this.setState({
            editing: false,
            currentUser: {id: null, content: ''}
        })
        const tasks = (this.state.data.map(item => (item.id === task.id ? task : item)))
        this.setState({
            data: tasks
        })
    }
    deleteTask(task) {
        const tasks = this.state.data.filter((item) => {
            return item.id !== task
        })
        this.setState({
            data: tasks
        })
    }
    cancelChange(task) {
        this.setState({
            editing: false,
            currentUser: {id: null, content: ''}
        })
    }
    render() {
        return(
            <div className="App">
                <Tasks task={ this.state.data } editTask={ this.editTask } deleteTask={ this.deleteTask }/>
                {this.state.editing ? (
                    <EditTask  current={this.state.currentUser} updateUser={this.updateUser} cancelChange={ this.cancelChange}/>
                ) : (
                    <AddTask addTask={ this.addTask }/>
                )}
            </div>
        )
    }
}

export default App;
