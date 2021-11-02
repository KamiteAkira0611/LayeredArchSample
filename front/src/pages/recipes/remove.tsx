import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import React from 'react'

const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: Float!){
    removeRecipe(id: $id)
  }
`

type Props = {
  recipeid: Number
}

const RemoveRecipe = (props: Props) => {
  const [removeRecipe, { data, loading, error }] = useMutation(REMOVE_RECIPE)

  const removerrecipe = async () => {
    const result = await removeRecipe({ variables: { id: props.recipeid } })
    console.log(result);
  }

  if(loading) return <p>loading</p>

  return (
    <div>
      <button onClick={() => removerrecipe()}>削除</button>
    </div>
  )
}

export default RemoveRecipe
