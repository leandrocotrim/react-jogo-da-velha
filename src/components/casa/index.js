import React, { Component } from 'react';

class Casa extends Component {

    click = () => {
        this.props.onCasaClick(this.props.casa);
    }

    render() {
        const className = 'casa ' +
            (isNaN(this.props.casa) ? 'no-drop ' : '') +
            (this.props.trilha.includes(this.props.index) ? 'trilha ' : '');

        return (
            <div className={className} onClick={this.click}>
                {this.props.casa}
            </div>
        )
    }
}

export default Casa;
