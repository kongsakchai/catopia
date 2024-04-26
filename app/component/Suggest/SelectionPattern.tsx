import { SuggestContext } from '@/app/main/suggest/page'
import React, { useContext } from 'react'

function SelectionPattern() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div>SelectionPattern Component</div>
    )
}

export default SelectionPattern