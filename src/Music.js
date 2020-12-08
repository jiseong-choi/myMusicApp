import React from 'react'
import PropTypes from 'prop-types'

function Music({albumId, ranking, name,artist}){
    return (
        <div>
            <h4>{name}</h4>
            <h5>{albumId}</h5>
            <p>{ranking}</p>
            <p>{artist}</p>
        </div>
    )
}

Music.propTypes = {
    albumId: PropTypes.number.isRequired,
    ranking: PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    artist:PropTypes.string.isRequired
}

export default Music