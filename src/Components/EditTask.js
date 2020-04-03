import React from 'react';
class EditTask extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false
        }
    }
    render() {
        if(this.state.showEdit){
            return(
                <div className="hello">есть</div>
            )
        }else{
            return(
                <div className="hello">путо</div>
            )
        }
    }
}
export default EditTask;