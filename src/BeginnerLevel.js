import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import './BeginnerLevel.css';
import DashboardNavbar from './DashboardNavbar';
import Button from '@mui/material/Button';

const BeginnerLevel = () => {
  const [code, setCode] = useState('// Try writing some code!\nconsole.log("Hello, React!");');
  const [output, setOutput] = useState('');

  // Load canvas-confetti script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  // Function to trigger confetti for 3 seconds
  const showConfetti = () => {
    if (window.confetti) {
      const duration = 3 * 1000; // 3 seconds
      const end = Date.now() + duration;

      const confettiInterval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(confettiInterval);
          return;
        }

        // Launch confetti from different parts of the screen
        window.confetti({
          particleCount: 50,
          spread: 70,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#ffeb3b'],
        });
      }, 200); // Fire confetti every 200ms
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="beginner-container">
        <aside className="sidebar">
          <h3>📘 Topics</h3>
          <ul>
            <li>1. What is React?</li>
            <li>2. JSX and Components</li>
            <li>3. Props</li>
            <li>4. State</li>
            <li>5. Simple React App</li>
          </ul>
        </aside>

        <main className="content">
          <section className="lesson">
            <h2>1. What is React?</h2>
            <p>React is a tool to build websites. It helps you make parts of a webpage, like buttons or menus, that can change without reloading the page.</p>
            <p>Example: A webpage with a "Like" button that updates when you click it.</p>
            <pre>
{`// This is a simple React piece
const message = <h1>Hello, React!</h1>;`}
            </pre>
            <p>React uses small pieces called components to build your webpage.</p>
          </section>

          <section className="lesson">
            <h2>2. JSX and Components</h2>
            <p>JSX looks like HTML but works in JavaScript. It helps you write what your webpage looks like.</p>
            <p>A component is like a LEGO block. You make one and use it many times.</p>
            <pre>
{`// A component
function Hello() {
  return <h1>Hi there!</h1>;
}

// Using it
function App() {
  return <Hello />;
}`}
            </pre>
            <p>In JSX, you can mix JavaScript with curly braces, like {'{1 + 1}'}, which shows 2.</p>
          </section>

          <section className="lesson">
            <h2>3. Props</h2>
            <p>Props are like notes you pass to a component to make it special.</p>
            <p>Example: Tell a component to show your name.</p>
            <pre>
{`// Component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using it
function App() {
  return <Greeting name="Alex" />;
}`}
            </pre>
            <p>Props let you reuse components with different data, like names or colors.</p>
          </section>

          <section className="lesson">
            <h2>4. State</h2>
            <p>State is like a component's memory. It remembers things that can change, like a score in a game.</p>
            <p>Use useState to add memory to your component.</p>
            <pre>
{`import React, { useState } from 'react';

function Clicker() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Add</button>
    </div>
  );
}`}
            </pre>
            <p>Clicking the button changes the number, and React updates the screen.</p>
          </section>

          <section className="lesson">
            <h2>5. Simple React App</h2>
            <p>Let’s put it all together! Make a tiny app where you type a name, and it says hello.</p>
            <p>This uses components, props, and state.</p>
            <pre>
{`import React, { useState } from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <Greeting name={name || 'Friend'} />
    </div>
  );
}`}
            </pre>
            <p>Try typing in the input box, and the greeting changes!</p>
          </section>

          <div className="badge-box">
            <h3>🏅 Great Job!</h3>
            <p>You’ve learned the basics of React. Click below to celebrate!</p>
            <button
              className="complete-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={showConfetti}
            >
              Mark Complete
            </button>
            <Link to="/home">
              <Button
                variant="outlined"
                color="primary"
                className="next-level-btn"
                startIcon={<span>🔓</span>}
              >
                Back to Main Page
              </Button>
            </Link>
          </div>
        </main>

        <aside className="compiler-panel">
          <h3>🖥️ Try It Out</h3>
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

export default BeginnerLevel;