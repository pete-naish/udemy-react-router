import React, { Component } from 'react';

class PostsIndex extends Component {
    componentWillMount() { // automatically calls when component is about to render for the first time
        console.log('this would be the right time to fetch posts');
    }
    render() {
        return (
            <div>List of blog posts</div>
        );
    }
}

export default PostsIndex;