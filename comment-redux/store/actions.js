//actionCreator action 的创建者
import * as types from './action-type';
export default {
    addComment(comment){
        return {
            type:types.ADD_COMMENT,
            payload:comment
        }
    },
    delComment(id){
        return {
            type:types.DEL_COMMENT,
            payload:id
        }
    }
}
/*

export default {
    addComment(comment){
        dispatch( {
            type:types.ADD_COMMENT,
            payload:comment
        })
    },
    delComment(id){
        dispatch(  {
            type:types.DEL_COMMENT,
            payload:id
        })
    }
}*/
