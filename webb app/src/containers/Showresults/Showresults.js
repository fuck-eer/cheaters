import React, { Component } from 'react'
import axios from 'axios';
import Showres from '../../Components/showresult/showresult';
import Spinner from '../../Components/UI/Spinner/Spinner';
import './showresult.css'
class Showresults extends Component{

state={
    questions:[],
    answers:[],
    loading:true,
    error:false
}


componentDidMount(){
axios.get('https://cheat-it.firebaseio.com/answers.json')
    .then(res=>{this.setState({loading:false,answers:Object.values(res.data)})
    // console.log(this.state.answers)
})
     .catch(err=>{this.setState({loading:false, error:true})
         console.log(err)})
axios.get('https://cheat-it.firebaseio.com/question.json')
    .then(res=>{this.setState({loading:false,questions:Object.values(res.data)})
    // console.log(this.state.questions)
})
     .catch(err=>{this.setState({loading:false,error:true})
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

if(this.state.error){
    data= (<div className='res'>
    <h4 style={{textAlign:'center',fontSize:'30px'}}>Data yet to be loaded...</h4>
    <h6 style={{textAlign:'center',fontSize:'15px',color:'#ff3030'}}>Patience is the key aspect of cheating</h6>
    </div>);
}

return(
    <div>
    <h2 className='headding'>Cheat-it Database</h2>
    <p className='inst'><span className='butt'>ctrl</span>+<span className='butt'>rightclick</span> :For Questions</p>
    <p className='inst'><span className='butt'>alt</span>+<span className='butt'>rightclick</span> :For Answers</p>
   {data}
   {/* {console.log(data)} */}
    </div>
);



}


}

export default Showresults;