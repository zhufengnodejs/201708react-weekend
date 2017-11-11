import React from 'react';
import 'moment/locale/zh-cn'
import moment from 'moment';
export default class Comment extends React.Component{
    render(){
        let {id,username,content,createAt}= this.props.comment;
        //对内容进行替换，把``包裹的内容都替换成<code></code>包裹的内容
        content = content.replace(/`([^`]+)`/g,function(){
            return `<code>${arguments[1]}</code>`;
        });
        return (
            <li className="list-group-item">
                {username}: <span dangerouslySetInnerHTML={{__html:content}}></span> <button onClick={()=>this.props.delComment(id)} className="btn btn-danger">删除</button> <span className="pull-right">{moment(createAt).fromNow()}</span>
            </li>
        )
    }
}