import React from 'react';
export default class Comment extends React.Component{
    render(){
        let {id,username,content,createAt}= this.props.comment;
        return (
            <li className="list-group-item">
                {username}:{content} <span className="pull-right">{createAt.toLocaleString()}</span>
            </li>
        )
    }
}