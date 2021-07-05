import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertAdd = () => {

    //const categories = ['One punch', 'Samuray x', 'Dragon Ball'];

   const [categories, setCategories] = useState(['One punch'])

    // const handleAdd = (e) => {
    //     setcategories([e,...categories]) //puedes agregar valor
    //     console.log(e)
         
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories = {setCategories}/>
            <hr/>

            {/* <button onClick={() => handleAdd('mulan')}> Agregar </button> */}

            <ol>
                {
                    categories.map( (category, i) => 
                        <GifGrid 
                            category = { category }
                            key = { category }
                        />
                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertAdd;
