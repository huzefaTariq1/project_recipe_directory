import React from 'react'

const SingleRecipe = ({ recipe }) => {
    return (
        <div className='mt-5 bg-white w-10/12 mx-auto rounded-md shadow-md p-3'>
           <center><img className='w-fit' src={window.location.origin + '/img/dish.jpeg'} alt="dish" /></center>
            <div className='text-gray-600 text-center text-2xl'> {recipe.title} </div>
            <div className='text-gray-500 text-center text-xl'>{recipe.cookingTime}</div>
            <ul className=' w-3/4 mx-auto text-gray-400 md:flex md:justify-between'>
                Ingrediant:
                {recipe.ingrediant.map((indg) => {
                    return (
                        <li>
                            {indg}
                        </li>
                    )
                })}
            </ul>
            <div className='text-gray-500'>
                {recipe.method}
            </div>
        </div>
    )
}

export default SingleRecipe