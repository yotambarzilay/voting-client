import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
    propTypes: {
        pair: React.PropTypes.any,
        vote: React.PropTypes.func,
        hasVoted: React.PropTypes.string,
        winner: React.PropTypes.string
    },
    mixins: [PureRenderMixin],

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