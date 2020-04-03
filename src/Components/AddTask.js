import React from 'react'
class AddTask extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                content: '',
            },
            IsEmpty: true
        }
    }
    handleChange = (e) => {
        this.setState({
            data:{
                content: e.target.value,
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { addTask } = this.props;
        if(this.state.data.content !== '') {
            addTask(this.state.data);
            this.setState({
                data: {
                    content: ''
                }
            })
        }else{
            this.setState({
                IsEmpty: false
            })
            setTimeout(() => {
                this.setState({
                    IsEmpty: true
                })
            }, 2000);
        }
    }
    render() {
        return(
            <div className="addtask">
                <form onSubmit={ this.handleSubmit }>
                    <label>Add new task:</label>
                    <label>{this.state.IsEmpty ? '': 'Empty string oops'}</label>
                    <input type="text" onChange={ this.handleChange } value={this.state.data.content}/>
                </form>
            </div>
        )
    }
}
export default AddTask