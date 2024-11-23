import React from 'react'

function Button({variant, text}) {

    if(variant == "bg-black"){
        return (
            <button className='bg-black text-white px-6 py-3 tracking-wider rounded-lg'>
                {text}
            </button>
        )
    }
    return (
        <button className='bg-white px-6 py-3 tracking-wider rounded-xl border-black border-3'>
            {text}
        </button>
    )
}

export default Button