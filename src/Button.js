// src/components/ui/Button.js
const Button = ({ children, className }) => {
    return (
      <button
        className={`bg-blue-600 text-white p-2 rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  