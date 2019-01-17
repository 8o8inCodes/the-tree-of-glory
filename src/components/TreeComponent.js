import React, { Component } from 'react';
import { setTitle } from '../store/actions/TreeActions';
import { connect } from 'react-redux';

// Change this to the data that's coming from the server
const titleData = {
    title: "CHANGED VALUE!",
    path: [0, 1, 0]
}

// Exporting this component simply because it would be easier to write unit tests after
export class TreeComponent extends Component {

    componentWillMount(){
        this.props.setTitle(titleData);
    }

    generateTree(data){
        const title = data.title;
        const generatedTree = data.children.map((child)=>{
            return this.generateTree(child);
        });

        return (
            // Don't forget to add the key property, I did research and it's 
            // required for react to know which components has to be updated
            <li>
                <h3>
                    {title}
                </h3>
                <ul>{generatedTree}</ul>
            </li>
        )
    }

    render(){
        return (<ul>{this.generateTree(this.props.tree)}</ul>)
    }
}



const mapStateToProps = (state) => {
    return {
        tree: state.tree
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (data) => dispatch(setTitle(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeComponent);