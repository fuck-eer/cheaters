import React, { Component } from 'react'
import './showstats.css'
import '../Showresults/showresult.css'
import Showstat from '../../Components/showstat/showstat'
import axios from 'axios'
import Spinner from '../../Components/UI/Spinner/Spinner'


class showstats extends Component{

    state={
       loading:true,
       
       statss:[],
        error:false    
    }

    componentDidMount(){
        // axios.get('https://cheat-it.firebaseio.com/try/cs-img-pro.json')
        // .then(res=>{this.setState({loading:false,stats:Object.entries(res.data),})
        //  })
        //   .catch(err=>{this.setState({loading:false})
        //      console.log(err)})

             axios.get('https://cheatit-server.club/livestats')
        .then(res=>{this.setState({loading:false,statss:Object.values(res.data)})
        console.log(this.state.statss)
         })
          .catch(err=>{this.setState({loading:false,error:true})
             console.log(err)})

             setInterval(()=>{
            
                axios.get('https://cheatit-server.club/livestats')
                .then(res=>{if(this.state.statss.length<=res.data.length)
                    this.setState({statss:Object.values(res.data)})
                    console.log('hi');
                })
                .catch(e=>{
                    console.log(e)
                })
            },20000)
             
}


    
    render(){
        let stats=null
        stats=<Spinner/>
        if(!this.state.loading && this.state.error!==true)
        if(this.state.statss){
            stats=this.state.statss.map((e)=>{

                if(e.answer)
                return <Showstat question={e.question} options={e.answer} key={Math.floor(Math.random()*10000+Math.random()*1000+Math.random()*100)}/>
            })
        }
        if(this.state.error){
            stats= (<div className='res'>
    <h4 style={{textAlign:'center',fontSize:'30px'}}>OOPS!!! Live data not present yet</h4>
    <h6 style={{textAlign:'center',fontSize:'15px',color:'#aaa'}}>Patience is the key aspect of cheating </h6>
    <span style={{display:'inline-block',width:'95%',textAlign:'right',fontSize:'12px',color:'#aaa',padding:'0px 10px 10px 0px '}}>~ Cheaty Cheaterson</span>
    </div>);
        }
        

        return(
            <div>
               <h2 className='headding'>LIVE-STATISTICS</h2>
               {stats}

            </div>
        );

    }
}

export default showstats;