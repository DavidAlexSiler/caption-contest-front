import React, { Component } from 'react'
import GalleryItem from './GalleryItem'
import { connect } from 'react-redux'

export class GalleryMapper extends Component {
    render() {
        return (
            <div>
                <h1>Winners Gallery</h1>
                {this.props.fullGallery ? this.props.fullGallery.map(c => <GalleryItem c={c} key={c.comic}/>) : null}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state.gallery
}

export default connect(mapStateToProps)(GalleryMapper)
