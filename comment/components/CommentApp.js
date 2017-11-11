import React from 'react';
import CommentInput from "./CommentInput";
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from "./CommentList";
export default class CommentApp extends React.Component{
    constructor(){
        super();
        this.state = {comments:[
            {id:1,username:'张三',content:'你好'},
            {id:2,username:'李四',content:'你好吗?'}
        ]};
    }
    render(){
       return (
           <div className="container" style={{marginTop:'20px'}}>
             <div className="row">
                 <div className="col-md-6 col-md-offset-3">
                     <div className="panel panel-default">
                         <div className="panel-heading">
                             <h3 className="text-center">珠峰留言板</h3>
                         </div>
                         <div className="panel-body">
                             <CommentList/>
                         </div>
                         <div className="panel-footer">
                             <CommentInput/>
                         </div>
                     </div>
                 </div>
             </div>
           </div>
       )
    }
}