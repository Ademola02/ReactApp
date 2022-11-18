import React, { useState, Component } from 'react';
// import { Link } from 'react-router-dom';
import Btn from './Btn';

class WeekApp extends Component {
   
    state = {todos:[],todo:'', tr: [] };

     handleChange = (e) =>{
                 this.setState({[e.target.name]: e.target.value })
            }
    show = () => {
        this.setState({
            tr: this.state.todos.map((task, i) => {
                return (
                    <tr key={i}>
                        <td>{task.task}</td>
                        <td>{task.done ?'Done':'XXX'}</td>
                        <td>
                            <button onClick={()=>{this.toggle(i)}}>Done</button>
                            <button onClick={()=>{this.deleteTodo(i)}}>Delete</button>

                        </td>
                        </tr>
                );
            }),
        });   
    };
     add = () =>{
        this.state.todos.push({ task : this.state.todo, done: false});
        console.log(this.state.todos);
        this.show();
        this.setState({ todo: "" });
     };
     toggle = (i) => {
        this.state.todos[i].done ? (this.state.todos[i].done = false):(this.state.todos[i].done = true);
        this.show();
     };
     deleteTodo = (i) =>{
        this.state.todos.splice(i,1);
        this.show();
     };

    render() { 
        return ( 
            <div>
                <Btn label ="Please click me"/>
                <Btn label ="click me again"/> 
                
                <h1>This is a WeekApp Page</h1>

             <input type="text" onChange={this.handleChange} name="todo"/>
             
             <button onClick={this.add}>Add</button>
             <br />
             <br />
             <hr />
        <table width="100">
             <tbody>
             {this.state.tr}
             </tbody>
         </table>
            </div>
         );
    }
}
 
export default WeekApp;
// const WeekApp = () =>{

//     let [todos,setTodos]= useState([])
//     let [todo,setTodo]=useState(['Todo']);
//     let [tr,setTr]= useState([]);

   
    
//     const add = () => {
//         todos.push({task:todo,done:false});
//         setTodos(todos);
//          
//     }
    
//     const show = () =>{
//         setTr(todos.map((task, i) =>{
//             return (
//                 <tr key={i}>
//                     <td>{task.task}</td>
//                     <td>{task.done?'Done':'XX'}</td>
//                     <td><button onClick={()=>{toggle(i)}}>Done</button></td>
//                 </tr>
//             )
//         }))
//     }
//     const toggle = (i) =>{
//         // console.log(index);
//         todos[i].done?todos[i].done=false:todos[i].done=true;
//         setTodos(todos);
//         show()
//     }

//  const handleChange = (e) =>{
//         setTodo(e.target.value)
//     }
//     return(
//         <div>
           
//             <Btn label ="Please click me" key={1}/>
//             <Btn label ="Delete button" key={2}/>
         


//             <h1>This is a WeekApp Page</h1>

//         <input type="text" onChange={handleChange}/>
//         <button onClick={add}>Add</button>
//         <table width="100">
//             <tbody>
//             {tr}
//             </tbody>
//         </table>
//         </div>
//     );
// }

// export default WeekApp;