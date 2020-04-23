import React from "react";

const Editor = (props) => {
  const markdown =`
  #This is my very first markdown
  ##Here come the sub findAllByTitle
`;
  return (
    <div>
      <h3>Editor</h3>
      <textarea
        id="editor"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={markdown}
      />
    </div>
  );
};

export default Editor;

// h1
// h2
//  link
// inline code
// code block
// list item
// blockquote
// image
// bolded text
