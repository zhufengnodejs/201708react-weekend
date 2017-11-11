import * as types from './action-type';
//定义初始状态
let comments = localStorage.getItem('comments');
comments = comments?JSON.parse(comments):[];
let initState = {
    comments
}
export default function(state=initState,action){
 switch (action.type){
     //{type:ADD_COMMENT,payload:{id,username,content,createAt}}
     case types.ADD_COMMENT:
         let addedComments = [...state.comments,action.payload];
         localStorage.setItem('comments',JSON.stringify(addedComments));
         return {comments:addedComments};
     //{type:DEL_COMMENT,payload:1}
     case types.DEL_COMMENT:
         let deletedComments = state.comments.filter(item=>item.id != action.payload);
         localStorage.setItem('comments',JSON.stringify(deletedComments));
         return {comments:deletedComments};
     default:
         return state;
 }
}