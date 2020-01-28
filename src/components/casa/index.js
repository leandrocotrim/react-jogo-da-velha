import React, { Component } from 'react';

class Casa extends Component {

    click = () => {
        this.props.onCasaClick(this.props.casa);
    }

    render() {
        return (
            <div className={isNaN(this.props.casa) ? "casa no-drop" : "casa"} onClick={this.click}>
                {this.props.casa}
            </div>
        )
    }
}

export default Casa;
