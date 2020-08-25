import React, { Component } from 'react'
import axios from 'axios'
import '../../Components/UI/Searchbar/Searchbar.css'
import Showresult from '../../Components/showresult/showresult'
import Searchbar from '../../Components/UI/Searchbar/Searchbar'
class Findresult extends Component{
state={
    typeed:'',
    que:'',
results:[],
loading:true,
error:false,
searching:false,
}


componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/my-project-1x.herokuapp.com/combinedqa')
        .then(res=>{this.setState({loading:false,results:Object.values(res.data)})
        // console.log(this.state.results)
    })
         .catch(err=>{this.setState({loading:false, error:true})
             console.log(err)})
    
    }




valuechanged=(event)=>{
this.setState({typeed:event.target.value})
}

search=()=>{
    let e=this.state.typeed
    this.setState({que:e,searching:true})
}


render(){
let k=<h1 className='search'>SEARCH</h1>;
if(this.state.searching){
   if(this.state.results){
       let found=0;
k=this.state.results.map(e=>{
    if(e.question.search(this.state.que)>0){
        found++;
        return <Showresult question={e.question} answer={e.answer} id={e.name} key={e.id}/>
    }
    
})

if(found===0){
    k=<h2 className='notfound'>NOT-FOUND</h2>
}


   }
//    k=<NOTFOUND>
}
    return(
        <div>
            <Searchbar valueof={this.state.typeed} changed={(event)=>this.valuechanged(event)} search={this.search} />
            {k}
        </div>
    );

}

}

export default Findresult