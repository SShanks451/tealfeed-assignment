import { useEffect } from "react";
import { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";

const defaultCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

const SyntaxHighlighter = () => {
  const [code, setCode] = useState(defaultCode);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const onChangeHandle = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="flex justify-center m-4 h-auto overflow-hidden">
      <pre className="absolute opacity-90 w-[40rem] h-[50rem]" style={{ margin: 0, padding: 0, paddingLeft: 8 }}>
        <code className="language-jsx">{code}</code>
      </pre>
      <textarea
        className="z-10 opacity-20 w-[40rem] h-[50rem] border-black font-mono pl-2 overflow-hidden"
        placeholder="Write your code here....."
        name="codeEditor"
        value={code}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export default SyntaxHighlighter;
