import React from 'react'
import Option from './options'

const showstat =(props)=>{

let option=Object.entries(props.options)


let options=option.map((e,i)=>{
    
    // console.log(e);
    return(
        <Option option={e[0]} people={e[1]}/>
    )
})

return(
    <div className='res'>
       <p className='que'>Q: {props.question}</p>
      {/* {options} */}
      {options}
    </div>
);

}
export default showstat;