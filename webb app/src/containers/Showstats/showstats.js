import React, { Component } from 'react'
import './showstats.css'
import '../Showresults/showresult.css'
import Showstat from '../../Components/showstat/showstat'
import axios from 'axios'
import Spinner from '../../Components/UI/Spinner/Spinner'


class showstats extends Component{

    state={
       loading:true,
       stats:[],
       
            
    }

    componentDidMount(){
        axios.get('https://cheat-it.firebaseio.com/try/cs-img-pro.json')
        .then(res=>{this.setState({loading:false,stats:Object.entries(res.data),})
         })
          .catch(err=>{this.setState({loading:false})
             console.log(err)})
}


    
    render(){
        let stats=null
        stats=<Spinner/>
        if(!this.state.loading)
        if(this.state.stats){

            stats=this.state.stats.map((e,i)=>{

                return <Showstat question={e[0]} options={e[1]} key={e[0]+e[1]}/>
            })
        }
        
            
           
           
            
            
            
          




        return(
            <div>
               <h2 className='headding'>STATISTICS</h2>
               {stats}

            </div>
        );

    }
}

export default showstats;