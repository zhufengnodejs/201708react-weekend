
//创建一个仓库 其实是一个函数作用域
let createStore = (reducer)=>{
    var state;
    //创建一个空数组，保存所有的监听函数
    let listeners = [];
    //获取仓库中的状态对象
    let getState = ()=>state;
    //我们定义一个更新数据的方法。只有通过它才能更新
//action是用来描述更改的动作的 {type:'',payload:{}}
//更新state的唯一方法就是调用dispatch方法
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(l=>l());
    }
    //在监听的时候就是把监听函数存放到监听函数数组里面
    let subscribe = (listener)=>{
        listeners.push(listener);
    }
    dispatch({})
    return {
        getState,
        dispatch,
        subscribe
    }
}
//定义初始值
let initState = {
    defaultColor:'orange',
    title:{
        text:'标题',
        color:'red'
    },
    content:{
        text:'内容'
    }
};
//1. 提供初始状态 2.从老状态对象和action返回新的状态对象
function reducer(state=initState,action){
    switch(action.type){
        //{type:"UPDATE_TITLE_TEXT",payload:{text:'新标题'}}
        case 'UPDATE_TITLE_TEXT'://更新标题的文本
            return {...state,title:{
                ...state.title,
                text:action.payload.text}
            };
        case 'UPDATE_TITLE_COLOR':
            /*let newState = JSON.parse(JSON.stringify(state));
            newState.title.color = action.payload.color;
            return newState*/

            return {...state,title:{
                ...state.title,
                color:action.payload.color}
            };
        default:
            return state;
    }
}
//把appState中的数据渲染到页面上
function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}
function renderTitle(data) {
    let title = document.querySelector('#title');
    title.innerHTML = data.text;
    title.style.color = data.color;
}
function renderContent(data){
    let content = document.querySelector('#content');
    content.innerHTML = data.text;
    content.style.color = data.color;
}

let store = createStore(reducer);
renderApp(store.getState());
store.subscribe(()=>{
    renderApp(store.getState());
});
//对数据做一些操作
store.dispatch({type:"UPDATE_TITLE_TEXT",payload:{text:'新标题'}});
store.dispatch({type:"UPDATE_TITLE_COLOR",payload:{color:'pink'}});
