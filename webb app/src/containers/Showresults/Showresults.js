import React, { Component } from 'react'
import axios from 'axios';
import Showres from '../../Components/showresult/showresult';
import Spinner from '../../Components/UI/Spinner/Spinner';
import './showresult.css'
class Showresults extends Component{

state={
   //firebase variables // questions:[],
    // answers:[],
    results:[],
    loading:true,
    error:false
}


componentDidMount(){
axios.get('http://cors-anywhere.herokuapp.com/ec2-15-207-223-122.ap-south-1.compute.amazonaws.com/combinedqa')
    .then(res=>{this.setState({loading:false,results:Object.values(res.data)})
    // console.log(this.state.results)
})
     .catch(err=>{this.setState({loading:false, error:true})
         console.log(err)})

         //==========================firebase server link=========================//

// axios.get('https://cheat-it.firebaseio.com/answers.json')
//     .then(res=>{this.setState({loading:false,answers:Object.values(res.data)})
//     // console.log(this.state.answers)
// })
//      .catch(err=>{this.setState({loading:false,error:true})
//          console.log(err)})
// axios.get('https://cheat-it.firebaseio.com/question.json')
//     .then(res=>{this.setState({loading:false,questions:Object.values(res.data)})
//     // console.log(this.state.questions)
// })
//      .catch(err=>{this.setState({loading:false,error:true})
//      console.log(err)})


}


render(){

let data=<Spinner />;

if(this.state.error){
    data= (<div className='res'>
    <h4>It's not working between us T_T</h4>
    <h6 style={{color:'#aaa'}}>Data not present yet... </h6>
    <h6 style={{width:'95%',textAlign:'right',fontSize:'12px',color:'#ff5050',marginBottom:'10px'}}>It's not you, it's me :(</h6>

    </div>);
}

if(!this.state.loading && this.state.error!==true){

    //===================================FIREBASE LOGIC============================//
//      if(this.state.questions&&this.state.answers){

//      let ans=null;
//      data=this.state.questions.reverse().map(ele=>{
//       ans='--'
//          this.state.answers.forEach(e=>{
//      if(ele.id===e.id){
//          ans=e.answer
//      }
//       })
//      return (<Showres id={ele.id} question={ele.question} key={ele.id} answer={ans}/>)
     
//      })
//  }
//======================================================================================//

if(this.state.results){
// console.log('in the if loop');
// console.log(this.state.results.reverse())
data=this.state.results.reverse().map(e=>{

    if(e.answer!=='--')
return <Showres id={e.id} question={e.question} answer={e.answer} key={Math.floor(Math.random()*100)+e.id} />})

}


 //DATA NOT PRESENT YET CARD
//  else{
//     data= (<div className='res'>
//     <h4 style={{textAlign:'center',fontSize:'25px'}}>It's not working between us T_T</h4>
//     <h6 style={{textAlign:'center',fontSize:'15px',color:'#aaa'}}>Data not present yet... </h6>
//     <h6 style={{width:'95%',textAlign:'right',fontSize:'12px',color:'#ff5050',marginBottom:'10px'}}>It's not you, it's me :(</h6>

//     </div>)
//  }
    
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