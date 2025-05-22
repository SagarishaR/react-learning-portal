import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import DashboardNavbar from './DashboardNavbar';
import './Compiler.css';

const Compiler = () => {
  const [code, setCode] = useState(`// Write your JavaScript code here
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('React Learner'));
`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput('');
    try {
      // Redirect console.log to capture output
      const logs = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
      };

      // Execute code
      const result = eval(code);
      console.log = originalConsoleLog;

      // Combine logs and result
      const outputText = logs.join('\n') + (result !== undefined ? `\n${result}` : '');
      setOutput(outputText || 'No output');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const clearOutput = () => {
    setOutput('');
  };

  return (
    <>
      <DashboardNavbar />
      <div className="compiler-container">
        <h1 className="text-4xl font-bold text-center mb-8">JavaScript Compiler</h1>
        <div className="editor-container">
          <Editor
            height="400px"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              automaticLayout: true,
            }}
          />
        </div>
        <div className="controls">
          <button
            onClick={runCode}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:from-blue-600 hover:to-teal-500 transition"
          >
            Run Code
          </button>
          <button
            onClick={clearOutput}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition ml-4"
          >
            Clear Output
          </button>
        </div>
        <div className="output-container">
          <h2 className="text-xl font-semibold mb-4">Output</h2>
          <pre className="output-text">{output || 'Run the code to see output'}</pre>
        </div>
      </div>
    </>
  );
};

export default Compiler;