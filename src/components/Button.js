import React from 'react';

const Button = () => {
    const categories = ['All', 'Music', 'Python', 'React Routers', 'Computer Hardware', 'AI', 'Mixes'];
    return(
        <div className='m-0'>
            {
            categories.map((cat) => (
                <button
                 key={cat}
                 className='bg-gray-400 px-3 py-1 m-2 rounded-md text-white'>
                    {cat}
                </button>
            ))
            }
           
        </div>
    )

}

export default Button;

