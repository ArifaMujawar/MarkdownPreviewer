import React from "react";

const Editor = (props) => {
  //   const markdown =`
  //   #This is my very first markdown
  //   ##Here come the sub findAllByTitle
  // `;
  return (
    <div>
      <h3>Editor</h3>
      <textarea
        id="editor"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default Editor;
