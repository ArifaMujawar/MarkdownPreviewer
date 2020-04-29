import React from "react";
import marked from "marked";
const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
});
const Preview = (props) => {
  return (
    <div>
      <h3>Preview</h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.value, { renderer: renderer }),
        }}
      />
    </div>
  );
};

export default Preview;
