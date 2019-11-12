import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayButtons from '../containers/PlayButtons'
import InputContainer from '../containers/InputContainer'
import { getComic } from '../services/backend'


export class Comic extends Component {

    state = {
        showButts: true
    }

    componentDidMount() {
            this.getAComic()
    }

    getAComic(){
        getComic().then(data => this.props.dispatch({ type: "GET_COMIC", comic: data[0] }))
            .then(this.setState({ showButts: true })) 
    }

    newComic = () => {
        this.getAComic()
    }

    playGame = (e) => {
        this.setState({
            showButts: !this.state.showButts
        })
    }

    render() {
        return (
            <div>
                {this.props.comic.caption === "" ? this.getAComic : <img src={this.props.comic.src} alt='comic' />}
                {this.state.showButts ? <PlayButtons newComic={this.newComic} playGame={this.playGame}/> : <InputContainer />}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.play
}
export default connect(mapStateToProps)(Comic)
