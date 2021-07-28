import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import "./styles.scss"
const Pagination = () => {
    return (
        <div className="paginationWrapper">
            <button><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
            <button><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button>1</button>
            <button><FontAwesomeIcon icon={faAngleRight} /></button>
            <button><FontAwesomeIcon icon={faAngleDoubleRight} /></button>

        </div>
    )
}

export default Pagination
