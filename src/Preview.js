import React from 'react';
import marked from 'marked';

const Preview = (props) => {
  const result = marked(props.value);
  props.setResult(result);
return(

  <div>
  <h3>Preview</h3>
  <div id="preview">
  {result}</div>
  </div>
);
};

export default Preview;