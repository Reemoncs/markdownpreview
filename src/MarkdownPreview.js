import React from 'react';
import marked from 'marked';

function MarkdownPreview(props) {
    return (
        <span dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}></span>
    );
}

export default MarkdownPreview;