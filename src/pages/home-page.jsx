import React from 'react'

import logo from '../assets/img/logo.png'

export class HomePage extends React.Component {
    state = {}

    render() {
        const { count } = this.props
        return (
            <section>
                <img src={logo} alt="Logo" style={{ maxWidth: '300px' }} />
            </section >
        )
    }
}