import React from 'react';
export default class CommentInput extends React.Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        let username = this.username.value;//获取用户输入的用户名
        let content = this.content.value;//获取用户输入的内容
        this.props.addComment({
            username,
            content
        });
        this.content.value = '';
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-md-2">用户名</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" ref={input=>this.username=input} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-2">内容</label>
                    <div className="col-md-10">
                        <textarea cols="30" rows="10" className="form-control"  ref={input=>this.content=input} required></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-10 col-md-offset-2">
                        <input type="submit" className="btn btn-primary" value="发言"/>
                    </div>
                </div>
            </form>
        )
    }
}