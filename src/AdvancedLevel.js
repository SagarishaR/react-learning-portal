import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import './AdvancedLevel.css';
import DashboardNavbar from './DashboardNavbar';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const AdvancedLevel = () => {
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Advanced React!");');
  const [output, setOutput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

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

  const showConfetti = () => {
    if (window.confetti) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;
      const confettiInterval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(confettiInterval);
          return;
        }
        window.confetti({
          particleCount: 50,
          spread: 70,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#ffeb3b'],
        });
      }, 200);
    }
  };

  const handleCompleteClick = (event) => {
    showConfetti();
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };

  return (
    <>
      <DashboardNavbar />
      <div className="advanced-container">
        <aside className="sidebar">
          <h3>📘 Topics</h3>
          <ul>
            <li>1. Redux</li>
            <li>2. Optimization</li>
            <li>3. Context API</li>
            <li>4. Deployment</li>
            <li>5. Custom Hooks</li>
            <li>6. Hooks Deep Dive</li>
            <li>7. Performance Monitoring</li>
            <li>8. Testing with Jest</li>
          </ul>
        </aside>

        <main className="content">
          <section className="lesson">
            <h2>1. Redux</h2>
            <p>Redux is a predictable state container for JavaScript apps.</p>
            <pre>
{`import { createStore } from 'redux';
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);`}
            </pre>
          </section>

          <section className="lesson">
            <h2>2. Optimization</h2>
            <p>Techniques like memoization, lazy loading, and splitting bundles improve app performance.</p>
            <pre>
{`import React, { memo } from 'react';
const MyComponent = memo(() => <div>Optimized Component</div>);
const LazyComponent = React.lazy(() => import('./LazyComponent'));`}
            </pre>
          </section>

          <section className="lesson">
            <h2>3. Context API</h2>
            <p>Use React's Context API to avoid prop drilling and manage global state easily.</p>
            <pre>
{`const MyContext = React.createContext();
const Provider = ({ children }) => (
  <MyContext.Provider value={{ data: 'Shared' }}>
    {children}
  </MyContext.Provider>
);`}
            </pre>
          </section>

          <section className="lesson">
            <h2>4. Deployment</h2>
            <p>React apps can be deployed using Vercel, Netlify, or AWS.</p>
            <pre>
{`npm run build
// Then deploy the build folder using Netlify CLI
netlify deploy --prod`}
            </pre>
          </section>

          <section className="lesson">
            <h2>5. Custom Hooks</h2>
            <p>Encapsulate logic that can be reused across components.</p>
            <pre>
{`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}`}
            </pre>
          </section>

          <section className="lesson">
            <h2>6. Hooks Deep Dive</h2>
            <p>Understand how `useEffect`, `useMemo`, `useCallback`, and `useRef` behave.</p>
            <pre>
{`useEffect(() => {
  // Run side effects
}, [dependencies]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
            </pre>
          </section>

          <section className="lesson">
            <h2>7. Performance Monitoring</h2>
            <p>Monitor performance using tools like React Profiler, Lighthouse, and Chrome DevTools.</p>
            <pre>
{`import { Profiler } from 'react';

<Profiler id="App" onRender={(...args) => console.log(args)}>
  <App />
</Profiler>;`}
            </pre>
          </section>

          <section className="lesson">
            <h2>8. Testing with Jest</h2>
            <p>Test your React components using Jest and React Testing Library.</p>
            <pre>
{`import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders welcome text', () => {
  render(<MyComponent />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});`}
            </pre>
          </section>

          <div className="badge-box">
            <h3>🏅 Advanced Badge Earned!</h3>
            <p>Congratulations! You've mastered advanced React concepts.</p>
            <button
              className="complete-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleCompleteClick}
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
            <Popper open={open} anchorEl={anchorEl} placement="top" transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper elevation={3} style={{ padding: '15px', maxWidth: '300px', textAlign: 'center' }}>
                    <Typography variant="body1">
                      You have mastered advanced React concepts! Return to the main page to view your <strong>silver badge</strong>!
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
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

export default AdvancedLevel;
