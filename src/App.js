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
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addTask(task) {
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
                <AddTask addTask={ this.addTask }/>
                <EditTask />
            </div>
        )
    }
}

export default App;
