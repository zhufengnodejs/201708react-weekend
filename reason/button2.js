class LikeButton extends Component{
  constructor(props){
    super(props);//this.props =props;
    this.state = {liked:false};
    //把handleClick方法里的this绑死为当前类的实例
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({liked:!this.state.liked});
  }

  render(){
    //从字符串创建DOM对象
    this.element = this.createDOMFromString(`
       <button style="color:${this.props.color};background-color:${this.props.backgroundColor}">
           ${this.state.liked?'取消':'点赞'}
       </button>
    `);
    //当点击按钮的时候执行handleClick方法
    this.element.addEventListener('click',this.handleClick)
    return this.element;
  }
}