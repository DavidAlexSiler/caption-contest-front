import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class NavBar extends Component {

    state = { 
        activeItem: 'about'
    }

    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu tabular className='nav'>
                <Menu.Item as={ Link }
                    to='/about'
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item as={ Link }
                    to='/play'
                    name='play'
                    active={activeItem === 'play'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item as={ Link }
                    to='/gallery'
                    name='gallery'
                    active={activeItem === 'gallery'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default NavBar