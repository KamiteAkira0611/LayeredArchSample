import { useQuery, gql } from '@apollo/client'
import React from 'react'

const RECIPES_QUERY = gql`
  query GetRecipes {
    recipes(skip:0, take: 25){
      id
      title
      description
    }
  }
`

const Recipes = () => {
  const { loading, error, data } = useQuery(RECIPES_QUERY)
  console.log(loading);
  console.log(error);
  console.log(data);
  
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  )
}

export default Recipes
