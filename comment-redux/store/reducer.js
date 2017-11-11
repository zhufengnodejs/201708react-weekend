import * as types from './action-type';
//定义初始状态
let initState = {
    comments:[]
}
export default function(state=initState,action){
 switch (action.type){
     //{type:ADD_COMMENT,payload:{id,username,content,createAt}}
     case types.ADD_COMMENT:
         return {comments:[...state.comments,action.payload]};
     //{type:DEL_COMMENT,payload:1}
     case types.DEL_COMMENT:
         return {comments:state.comments.filter(item=>item.id != action.payload)}
 }
}