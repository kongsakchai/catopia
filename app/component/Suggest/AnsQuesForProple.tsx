import { SuggestContext } from '@/app/main/suggest/page'
import React, { useContext } from 'react'

function AnsQuesForProple() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div>AnsQuesForProple Component</div>
    )
}

export default AnsQuesForProple