import React from 'react'
import './Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const eleserch = <FontAwesomeIcon icon={faSearch} />

const Searchbar=(props)=>{
return(
    <div className='divoinput'>
         <input className='inp' type='text' placeholder='What are you looking for?' value={props.valueof} onChange={props.changed} onKeyPress={props.keypres} />
         <button className='btn' onClick={props.search}>{eleserch}</button>
    </div>
)
}
export default Searchbar;