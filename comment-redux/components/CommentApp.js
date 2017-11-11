import React from 'react';
import CommentInput from "./CommentInput";
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from "./CommentList";
import {connect} from 'react-redux';
import actions from '../store/actions';
//mapStateToProps 把仓库中的状态🌲映射为属性对象，负责输入，把仓库中的状态取出来给组件渲染使用
//mapDispatchToProps 把仓库的dispatch方法映射为属性对象，负责输出。把组件里用户操作发射到仓库中去
@connect(
    state => state,
    actions
)
export default class CommentApp extends React.Component{
    constructor(){
        super();
    }
    addComment = (comment)=>{
        comment.id = Date.now();
        comment.createAt = new Date();
        //派发action,调用reducer修改仓库状态
        this.props.addComment(comment);
    }
    delComment = (id)=>{
        this.props.delComment(id);
    }
    render(){
        console.log(this.props);
        return (
           <div className="container" style={{marginTop:'20px'}}>
             <div className="row">
                 <div className="col-md-6 col-md-offset-3">
                     <div className="panel panel-default">
                         <div className="panel-heading">
                             <h3 className="text-center">珠峰留言板</h3>
                         </div>
                         <div className="panel-body">
                             <CommentList
                                 comments={this.props.comments}
                                 delComment={this.delComment}
                             />
                         </div>
                         <div className="panel-footer">
                             <CommentInput
                                 addComment={this.addComment}
                             />
                         </div>
                     </div>
                 </div>
             </div>
           </div>
       )
    }
}