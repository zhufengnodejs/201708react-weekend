import React from 'react';
import Comment from "./Comment";
export default class CommentList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.comments.map((item,index)=>(
                        <Comment comment={item}/>
                    ))
                }
            </ul>
        )
    }
}