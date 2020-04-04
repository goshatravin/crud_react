import React from 'react';
class EditTask extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                content: '',
                id: null,
            },
            IsEmpty: true
        }
    }
    componentWillMount() {
        const { current } = this.props
        console.log(current);
        this.setState({
            data:{
                content: current.content,
                id: current.id
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            data:{
                content: e.target.value,
                id: this.props.current.id
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { updateUser } = this.props;
        if(this.state.data.content !== '') {
            console.log(this.state.data);
            updateUser(this.state.data);
            this.setState({
                data: {
                    content: '',
                    id: null,
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
            <label>Edit task:</label>
            <label>{this.state.IsEmpty ? '': 'Empty string oops'}</label>
            <input type="text" onChange={ this.handleChange } value={this.state.data.content}/>
            <button >Save</button>
            <button>Cancel</button>
        </form>
    </div>
    )
    }
}
export default EditTask;