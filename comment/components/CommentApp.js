import React from 'react';
import CommentInput from "./CommentInput";
import 'bootstrap/dist/css/bootstrap.css'
export default class CommentApp extends React.Component{
    render(){
       return (
           <div className="container" style={{marginTop:'20px'}}>
             <div className="row">
                 <div className="col-md-6 col-md-offset-3">
                     <CommentInput/>
                 </div>
             </div>
           </div>
       )
    }
}