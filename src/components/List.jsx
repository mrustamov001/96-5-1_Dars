import React, { useState } from 'react'

const List = ({name, price, text1, text2, text3, btn}) => {

    const [btnk, setBtnk] = useState(false)

    function handleBtn(){
        setBtnk(!btnk)
    }
    // shadow-lg p-3 mb-5 bg-body-tertiary rounded

    return (
        <li onClick={() => handleBtn()} className={btnk ? "w-50 border border-primary py-5 text-center list-unstyled px-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded list btn--active" : "w-50 border list py-5 text-center list-unstyled px-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded"}>
            <h3 className='fs-5 fw-bold text-light'>
                {name}
            </h3>
            <u className='fs-3 fw-bold text-light'> 
                {price}
            </u>
            <p className='mt-3 text-light'>
                {text1}
            </p>
            <p className='text-light'>
                {text2}
            </p>
            <p className='text-light'>
                {text3}
            </p>
            <button className={!btnk ? "text-light btn btn-primary rounded-1" : "text-light btn btn-outline-success"}>
                {btn}
            </button>
        </li>
    )
}

export default List