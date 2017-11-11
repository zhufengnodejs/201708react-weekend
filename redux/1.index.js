var appState = {
    title:{
        text:'标题',
        color:'red'
    },
    content:{
        text:'内容',
        color:'blue'
    }
}
//把appState中的数据渲染到页面上
function renderApp(){
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
renderApp(appState);