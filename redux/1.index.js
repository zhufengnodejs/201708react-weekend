
//创建一个仓库 其实是一个函数作用域
let createStore = ()=>{
    var appState = {
        defaultColor:'orange',
        title:{
            text:'标题',
            color:'red'
        },
        content:{
            text:'内容'
        }
    }
    //创建一个空数组，保存所有的监听函数
    let listeners = [];
    //获取仓库中的状态对象
    let getState = ()=>appState;
    //我们定义一个更新数据的方法。只有通过它才能更新
//action是用来描述更改的动作的 {type:'',payload:{}}
//更新state的唯一方法就是调用dispatch方法
    function dispatch(action){
        switch(action.type){
            //{type:"UPDATE_TITLE_TEXT",payload:{text:'新标题'}}
            case 'UPDATE_TITLE_TEXT'://更新标题的文本
                appState.title.text = action.payload.text;
                break;
            case 'UPDATE_TITLE_COLOR':
                appState.title.color = action.payload.color;
                break;
            default:
                break;
        }
        listeners.forEach(l=>l());
    }
    //在监听的时候就是把监听函数存放到监听函数数组里面
    let subscribe = (listener)=>{
        listeners.push(listener);
    }
    return {
        getState,
        dispatch,
        subscribe
    }

}
//
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

let store = createStore();
renderApp(store.getState());
store.subscribe(()=>{
    renderApp(store.getState());
});
//对数据做一些操作
store.dispatch({type:"UPDATE_TITLE_TEXT",payload:{text:'新标题'}});
store.dispatch({type:"UPDATE_TITLE_COLOR",payload:{color:'pink'}});
