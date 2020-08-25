import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import '../showresult/showresult.css'

const elecon = <FontAwesomeIcon icon={faUserAlt} />

const options=(props)=>{
let persons=props.people
        if(!props.people)
        {
        persons='-'
        }
return(
    
        <p className='ans'>OPT:{props.option}<span className='people'>{elecon}   {persons}</span></p>
);

}
export default options