import React from 'react'
import { Button } from 'semantic-ui-react'

export default function PlayButtons(props) {
    return (
        <div>
            <Button.Group>
                <Button onClick={(e) => props.newComic(e)}>Choose Another Comic</Button>
                <Button.Or />
                <Button onClick={(e) => props.playGame(e)} positive>Play Caption Contest!</Button>
            </Button.Group>
        </div>
    )
}
