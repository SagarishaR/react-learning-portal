// src/components/ui/Progress.js
const Progress = ({ value }) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };
  
  export default Progress;
  