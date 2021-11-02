import { useQuery, gql, useMutation } from '@apollo/client'
import { Recipe } from 'src/graphql/types'
import AddRecipe from './add'
import RemoveRecipe from './remove'

const GET_RECIPES = gql`
  query GetRecipes{
    recipes {
      id
      title
      description
    }
  }
`

const Recipes = () => {
  const {data, error, loading} = useQuery(GET_RECIPES)

  if(loading) return <p>loading</p>
  if(error) return <p>error</p>
  
  return (
    <div>
      <h1>Recipes</h1>
      <AddRecipe />
      {data.recipes.map((recipe: Recipe, i: number) => {
        return(
          <div key={i}>
            <p>ID:{recipe.id} {recipe.title} {recipe.description}</p>
            <RemoveRecipe recipeid={Number(recipe.id)} />
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
