import React from 'react';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
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
    }
    addTask(task) {
        console.log(task);
        // task.id = Math.floor((Math.random() * 10 ))
        task.id = this.state.data.length + 1
        let tasks = [...this.state.data, task];
        console.log(tasks);
        this.setState({
            data: tasks
        })
    }
    editTask(task) {
        console.log(task);
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
    render() {
        return(
            <div className="App">
                <Tasks task={ this.state.data } editTask={ this.editTask } deleteTask={ this.deleteTask }/>
                {this.state.editing ? (
                    <EditTask  current={this.state.currentUser} updateUser={this.updateUser}/>
                ) : (
                    <AddTask addTask={ this.addTask }/>
                )}
            </div>
        )
    }
}

export default App;
