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
    }
    addTask(task) {
        task.id = Math.floor((Math.random() * 10 ))
        let tasks = [...this.state.data, task];
        console.log(tasks);
        this.setState({
            data: tasks
        })
    }
    editTask(task) {
        console.log(task);
    }
    render() {
        return(
            <div className="App">
                <Tasks task={ this.state.data } editTask={ this.editTask }/>
                <AddTask addTask={ this.addTask }/>
                <EditTask />
            </div>
        )
    }
}

export default App;
