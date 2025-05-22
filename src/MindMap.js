import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import DashboardNavbar from './DashboardNavbar';
import './MindMap.css';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'React Core Concepts' },
    position: { x: 400, y: 0 },
    style: { background: '#007bff', color: '#fff', border: 'none', padding: '10px' },
  },
  {
    id: '2',
    data: { label: 'Components' },
    position: { x: 100, y: 150 },
    style: { background: '#28a745', color: '#fff', border: 'none', padding: '10px' },
  },
  {
    id: '3',
    data: { label: 'Props & State' },
    position: { x: 400, y: 150 },
    style: { background: '#28a745', color: '#fff', border: 'none', padding: '10px' },
  },
  {
    id: '4',
    data: { label: 'Hooks' },
    position: { x: 700, y: 150 },
    style: { background: '#28a745', color: '#fff', border: 'none', padding: '10px' },
  },
  {
    id: '5',
    data: { label: 'Routing' },
    position: { x: 1000, y: 150 },
    style: { background: '#28a745', color: '#fff', border: 'none', padding: '10px' },
  },
  {
    id: '6',
    data: { label: 'Functional Components' },
    position: { x: 50, y: 300 },
  },
  {
    id: '7',
    data: { label: 'Class Components' },
    position: { x: 200, y: 300 },
  },
  {
    id: '8',
    data: { label: 'Props' },
    position: { x: 350, y: 300 },
  },
  {
    id: '9',
    data: { label: 'State' },
    position: { x: 500, y: 300 },
  },
  {
    id: '10',
    data: { label: 'useState' },
    position: { x: 650, y: 300 },
  },
  {
    id: '11',
    data: { label: 'useEffect' },
    position: { x: 800, y: 300 },
  },
  {
    id: '12',
    data: { label: 'React Router' },
    position: { x: 1000, y: 300 },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
  { id: 'e2-6', source: '2', target: '6' },
  { id: 'e2-7', source: '2', target: '7' },
  { id: 'e3-8', source: '3', target: '8' },
  { id: 'e3-9', source: '3', target: '9' },
  { id: 'e4-10', source: '4', target: '10' },
  { id: 'e4-11', source: '4', target: '11' },
  { id: 'e5-12', source: '5', target: '12' },
];

const MindMap = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="mindmap-container">
        <h1>React Learning Mind Map</h1>
        <div className="mindmap-flow">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            style={{ width: '100%', height: '700px' }}
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
    </>
  );
};

export default MindMap;