import { useQuery, gql } from '@apollo/client'
import { Recipe } from 'src/utils/graphql/types'

const RECIPES_QUERY = gql`
  query GetRecipes {
    recipes(skip:0, take: 25){
      id
      title
      description
    }
  }
`

const CREATE_RECIPE = gql`
  mutation {
    
  }
`

const Recipes = () => {
  const { loading, error, data } = useQuery(RECIPES_QUERY)

  if(loading) return <p>loading</p>
  if(error) return <p>error</p>
  
  return (
    <div>
      <h1>Recipes</h1>
      <input type="text" />
      <input type="text" />
      <button>追加</button>
      {data.recipes.map((recipe: Recipe, i: number) => {
        return(
          <div key={i}>
            <p>ID:{recipe.id} {recipe.title} {recipe.description}</p>
            <input type="text" />
            <input type="text" />
            <button>変更</button>
            <button>削除</button>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
