import React from 'react'
import  './showresult.css'

const showres=(props)=>{
    return(
<div className='res'>
<p className='que'>Q:{props.question}</p>
<p className='ans'>Ans:{props.answer}</p>
<p className='id'>id:{props.id}</p>

</div>
    );
}
export default showres