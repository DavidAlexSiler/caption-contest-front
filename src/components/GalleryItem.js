import React, { Component } from 'react'
import {Image, Modal } from 'semantic-ui-react'

export class GalleryItem extends Component {

    render() {
        return (
            <div className='item-div'>
                <Modal trigger={<img className="gallery-item" src={this.props.c.comic} alt='comic' />}>
                    <Modal.Header style={{ 'text-align': 'center' }}>Winner!</Modal.Header>
                    <Modal.Content>
                        <Image className='center' src={this.props.c.comic} />
                        <Modal.Description>
                            <p className='caption-font'>
                                {`" ${this.props.c.caption} "`}
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default GalleryItem
