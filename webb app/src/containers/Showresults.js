import React, { Component } from 'react'
import axios from 'axios';
import Showres from '../Components/showresult';
import Spinner from '../Components/UI/Spinner';
import './showresult.css'
class Showresults extends Component{

state={
    questions:[],
    answers:[],
    loading:true
}


componentDidMount(){
axios.get('https://cheat-it.firebaseio.com/answers.json')
    .then(res=>{this.setState({loading:false,answers:Object.values(res.data)})
    // console.log(this.state.answers)
})
     .catch(err=>{this.setState({loading:false})
         console.log(err)})
axios.get('https://cheat-it.firebaseio.com/question.json')
    .then(res=>{this.setState({loading:false,questions:Object.values(res.data)})
    // console.log(this.state.questions)
})
     .catch(err=>{this.setState({loading:false})
     console.log(err)})
}

// componentDidUpdate(){
//     axios.get('https://cheat-it.firebaseio.com/answers.json')
//         .then(res=>{this.setState({answers:Object.values(res.data)})
//         console.log(this.state.answers)})
//          .catch(err=>console.log(err))
//     axios.get('https://cheat-it.firebaseio.com/question.json')
//         .then(res=>{this.setState({questions:Object.values(res.data)})
//         console.log(this.state.questions)})
//          .catch(err=>console.log(err))
//     }

   



render(){

let data=<Spinner />;

if(!this.state.loading){

    let ans=null;
data=this.state.questions.map(ele=>{
 ans='--'
    this.state.answers.forEach(e=>{
if(ele.id===e.id){
    ans=e.answer
}
 })

//to hide questions from view with no answers 
//  if(ans==='--')
//  return null
return (<Showres id={ele.id} question={ele.question} key={ele.id} answer={ans}/>)

})



}



return(
    <div>
    <h2 className='headding'>Cheat-it Database</h2>
   {data}
    </div>
);



}


}

export default Showresults;