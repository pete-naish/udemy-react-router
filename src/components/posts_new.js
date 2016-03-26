import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate user to index
                // navigate by calling this.context.router.push with 
                // the new path
                this.context.router.push('/');
            });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props; // this comes from reduxForm, { handleSubmit } = this.props; is shorthand form handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        return ( // {...title} passes in all available reduxForm object props to the input
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="categories">Categories</label>
                    <input id="categories" type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form> 
        ); // title.touched ensures that error message doesn't show on initial render; only when blurred
    }
}

function validate(values) {
    let errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);