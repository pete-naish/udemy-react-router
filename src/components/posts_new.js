import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props; // this comes from reduxForm, { handleSubmit } = this.props; is shorthand form handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        return ( // {...title} passes in all available reduxForm object props to the input
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories</label>
                    <input id="categories" type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        );
    }
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);