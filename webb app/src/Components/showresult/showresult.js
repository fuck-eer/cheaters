import React from 'react'
import  './showresult.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
const eleuser = <FontAwesomeIcon icon={faUserAlt} />

const showres=(props)=>{

    return(
<div className='res'>
<p className='que'>Q: {props.question}</p>
<p className='ans'>Ans: {props.answer}</p>
<p className='id'>{eleuser}   {props.id}</p>

</div>
    );
}
export default showres