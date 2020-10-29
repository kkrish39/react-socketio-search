import React from 'react'

import '../assets/css/searchcards.css'

import IndividualCard from './IndividualCard'

const renderComponents = (data)  => {
    var htmlContent = Object.keys(data).map((key) => (<IndividualCard keySource={key} rows={data[key]} timeout={1500} key={key}/>))
    return htmlContent
}

const SearchCards = (props) => (<div className="results-section"> {renderComponents(props.result)}</div>);

export default SearchCards;