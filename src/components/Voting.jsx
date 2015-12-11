import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
    propTypes: {
        pair: React.PropTypes.array,
        vote: React.PropTypes.func,
        hasVoted: React.PropTypes.string,
        winner: React.PropTypes.string
    },

    render() {
        return (
            <div>
                {this.props.winner ?
                    <Winner ref="winner" winner={this.props.winner}/> :
                    <Vote {...this.props} />
                }
            </div>
        );
    }
});