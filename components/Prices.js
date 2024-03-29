import React from 'react';

class Prices extends React.Component {
    state = {
        currency: 'EUR'
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        Select your currency
                    </div>
                    <div className="card-body">
                        <select className="form-control" onChange={e => this.setState({currency: e.target.value})}>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header">
                        Bitcoin rate for {this.props.bpi[this.state.currency].description}
                    </div>
                    <div className="card-body d-flex">
                        <span className="badge badge-primary mt-1 mb-1 mr-2">{this.props.bpi[this.state.currency].code}</span>
                        <span><strong>{' ' + this.props.bpi[this.state.currency].rate}</strong></span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Prices;
