// commented-out code is additional boilerplate which can be removed using the shorthand at the end

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; // link components are real anchor tags, so open in new tab etc works as expected

class PostsIndex extends Component {
    componentWillMount() { // automatically calls when component is about to render for the first time
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary"> 
                        Add a post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);
// use this shorthand
export default connect(null, { fetchPosts })(PostsIndex);