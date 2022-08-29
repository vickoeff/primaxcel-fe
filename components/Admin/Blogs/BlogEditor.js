import React from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import styles from './BlogForm.module.css';

class BlogEditor extends React.Component {
	handleChange = (value) => {
		this.props.onSectionDescChange(value, this.props.index);
	};

	render() {
		return (
			<ReactQuill
				value={this.props.description}
				onChange={this.handleChange}
				className={styles.editor}
			/>
		);
	}
}

export default BlogEditor;
