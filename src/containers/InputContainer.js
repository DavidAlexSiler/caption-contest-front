import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


export class InputContainer extends Component {

    state = {
        input1: '',
        input2: '',
        vote1: 0,
        vote2: 0,
        winner: {
            comic: '',
            caption: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleClick1 = (e) => {
        console.log('click', e.target)
        this.setState({
            ...this.state,
            vote1: this.state.vote1 + 1
        })
    }
    handleClick2 = (e) => {
        console.log('cluck', e.target)
        this.setState({
            ...this.state,
            vote2: this.state.vote2 + 1
        })
    }


    componentDidUpdate(prevProps, prevState){
        if(this.state.winner !== prevState.winner){
                this.props.dispatch({type: "GET_WINNER", fullGallery: this.state.winner})
        }else{
            return null
        }
    }

    handleCalculate = (e) => {
        if(this.state.vote1 > this.state.vote2){
            this.setState({
                ...this.state,
                winner: {
                    comic: this.props.play.comic.src,
                    caption: this.state.input1
                }
            })
        }else if(this.state.vote1 < this.state.vote2){
            this.setState({
                ...this.state,
                winner: {
                    comic: this.props.play.comic.src,
                    caption: this.state.input2
                }
            })
        }else{
            window.alert("It's a Tie! You need a Tie-Breaker vote!")
        }
    }

    render() {
        return (
            <div>
                <Input fluid onChange={(e) => this.handleInput(e)} 
                    name='input1'
                    action={{
                        icon: "thumbs up outline",
                        onClick: (e) => this.handleClick1(e),
                    }}
                    placeholder='say something funny...' />
                
                <br/>    

                <Input fluid onChange={(e) => this.handleInput(e)}
                    name='input2'
                    action={{
                        icon: "thumbs up outline",
                        onClick: (e) => this.handleClick2(e)
                    }}
                    placeholder='say something funny...' />

                <br /> 

                <Button animated onClick={(e) => this.handleCalculate(e)}>
                    <Button.Content visible>Finished Voting!</Button.Content>
                    <Button.Content hidden>
                        <p>See the Winner!</p>
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(InputContainer)
