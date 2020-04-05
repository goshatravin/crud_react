import React from 'react';
import './AddTask.css'

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
    handleCancel = (e) => {
        const { cancelChange } = this.props;
        e.preventDefault()
        cancelChange();
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { updateUser } = this.props;
        if(this.state.data.content !== '') {
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
        <form >
            <input type="text"  className="input-add" onChange={ this.handleChange } value={this.state.data.content}/>
            <input type="submit"  className="btn btn-add" value='✓' onClick={ this.handleSubmit }/>
            <input type="submit"  className="btn btn-cencel" value='Cancel' onClick={ this.handleCancel }/>
        </form>
        <label>{this.state.IsEmpty ? '': 'Empty string oops'}</label>
    </div>
    )
    }
}
export default EditTask;