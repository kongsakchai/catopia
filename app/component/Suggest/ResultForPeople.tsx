import { SuggestContext } from '@/app/main/suggest/page'
import React, { useContext } from 'react'

function ResultForPeople() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div>ResultForPeople Component</div>
    )
}

export default ResultForPeople