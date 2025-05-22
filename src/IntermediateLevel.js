import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useProgress } from './ProgressContext';
import './LevelPage.css';
import DashboardNavbar from './DashboardNavbar';

const IntermediateLevel = () => {
  const { markCompleted } = useProgress();
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (typeof markCompleted === 'function') {
      markCompleted('advanced'); // Unlock advanced level
    } else {
      console.warn('markCompleted is not available in ProgressContext');
    }
  }, [markCompleted]);

  const runCode = () => {
    try {
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
      };

      // eslint-disable-next-line no-eval
      eval(code);

      console.log = originalLog;
      setOutput(logs.join('\n') || 'No output');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="intermediate-container">
        <aside className="sidebar">
          <h3>📘 Topics</h3>
          <ul>
            <li>1. useState Hook</li>
            <li>2. useEffect Hook</li>
            <li>3. Forms in React</li>
            <li>4. React Router</li>
          </ul>
        </aside>

        <main className="content">
          <section className="lesson">
            <h2>1. useState Hook</h2>
            <p>The <code>useState</code> hook lets you add state to functional components. It returns a state variable and a function to update it.</p>
            <pre>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
            </pre>
            <p>Try changing the count in the compiler!</p>
          </section>

          <section className="lesson">
            <h2>2. useEffect Hook</h2>
            <p>The <code>useEffect</code> hook handles side effects, like fetching data or updating the DOM, and runs after render.</p>
            <pre>
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup
  }, []);
  return <p>Seconds: {seconds}</p>;
}`}
            </pre>
            <p>It’s like componentDidMount and componentWillUnmount combined!</p>
          </section>

          <section className="lesson">
            <h2>3. Forms in React</h2>
            <p>Forms in React use controlled components, where form inputs are tied to state.</p>
            <pre>
{`import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
            </pre>
            <p>Try logging the input value in the compiler.</p>
          </section>

          <section className="lesson">
            <h2>4. React Router</h2>
            <p>React Router lets you navigate between pages in your app using routes.</p>
            <pre>
{`import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
            </pre>
            <p>Use <code>Link</code> to navigate without reloading the page.</p>
          </section>

          <div className="badge-box">
            <h3>🏅 Intermediate Badge Earned!</h3>
            <p>You're now ready to move to the Advanced level!</p>
            <Link to="/" className="next-level-btn">🔓 Back to Main Page</Link>
          </div>
        </main>

        <aside className="compiler-panel">
          <h3>🖥️ JavaScript Compiler</h3>
          <AceEditor
            mode="javascript"
            theme="monokai"
            value={code}
            onChange={setCode}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            style={{ width: '100%', height: '400px' }}
          />
          <button className="run-btn" onClick={runCode}>
            Run Code
          </button>
          <div className="output-box">
            <h4>Output:</h4>
            <pre>{output}</pre>
          </div>
        </aside>
      </div>
    </>
  );
};

export default IntermediateLevel;