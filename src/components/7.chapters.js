import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends Component {
  // bind 箭头函数
  handleClick = (index,title)=>{
    console.log(index,title);
  }
  render(){
    //`key` is not a prop. Trying to access it will result in `undefined` being returned.
    //key属性虽然传递给子组件，但子组件里拿不到。
    return (
      <div>
        <h1 onClick={(event)=>this.handleClick(this.props.index,this.props.lesson.title)}>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    )
  }
}

class LessonsList extends Component {
  render(){
    return (
      <div>
        {
          this.props.lessons.map((item,index)=>(
            <Lesson index={index} key={index} lesson={item}/>
          ))
        }
      </div>
    )
  }
}
render(<LessonsList lessons={lessons} />,document.querySelector('#root'));