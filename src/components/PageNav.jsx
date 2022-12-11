import React from 'react'

function PageNav(props) {

    if (props.page === 1) {
        return (
            <div className='d-flex' >
                <button className='btn btn-primary float-right' onClick={() => props.setPage(props.page + 1)}>
                    Page {props.page + 1}
                </button>
            </div>
        )
    } else {
        return (
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-primary' onClick={() => props.setPage(props.page - 1)}>
                    Page {props.page - 1}
                </button>

                <button className='btn btn-primary' onClick={() => props.setPage(props.page + 1)}>
                    Page {props.page + 1}
                </button>
            </div>

        )
    }
}

export default PageNav