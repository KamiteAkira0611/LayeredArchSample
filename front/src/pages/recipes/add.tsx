import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { useState } from 'react'

const ADD_RECIPE = gql`
  mutation AddRecipe($title: String!, $description: String!) {
    addRecipe(newRecipeData: {title: $title, description: $description }){
      id
      title
      description
    }
  }
`
const AddRecipe = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [addRecipe, { data, loading, error }] = useMutation(ADD_RECIPE)

  const addrecipe = async () => {
   const result =  await addRecipe({ variables: { title: title, description: desc } })
   console.log(result);
   
  }

  if(loading) return <p>loading</p>

  return (
    <div>
      <input type="text" onChange={(e) => settitle(e.target.value)} />
      <input type="text" onChange={(e) => setdesc(e.target.value)} />
      <button onClick={() => addrecipe()}>追加</button>
    </div>
  )
}

export default AddRecipe
