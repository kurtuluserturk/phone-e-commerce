import React from 'react'

const Title = ({ name, title }) => {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitilize font-weight-bold">
                    {name} <strong className="text-yellow">{title}</strong>
                </h1>
            </div>
        </div>
    )
}

export default Title
