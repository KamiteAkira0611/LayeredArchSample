import { useQuery, gql, useMutation } from '@apollo/client'
import { Recipe } from 'src/graphql/types'

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
      {data.recipes.map((recipe: Recipe, i: number) => {
        return(
          <div key={i}>
            <p>ID:{recipe.id} {recipe.title} {recipe.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
