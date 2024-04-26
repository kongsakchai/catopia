
import { SuggestContext } from '@/app/main/suggest/page'
import React, { useContext } from 'react'

function Begin() {

    const { setQuestionState } : any = useContext(SuggestContext)

  return (
    <div>Begin Component</div>
  )
}

export default Begin