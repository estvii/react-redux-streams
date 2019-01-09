import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './../streams/StreamForm';
import _ from 'lodash';

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues)
    };

    render() {
        console.log(this.props)
        
        if(!this.props.stream) {
            return <div>Loading</div>
        }
        return (
            // <div>{this.props.stream.title}</div>
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
            </div>
        );
        
    }
}

const mapStateToProps = (state, ownProps) => {
    
    // console.log(state.streams);
    return{
        stream: state.streams[ownProps.match.params.id] 
    }
}

export default connect(mapStateToProps, {fetchStream, editStream })(StreamEdit);