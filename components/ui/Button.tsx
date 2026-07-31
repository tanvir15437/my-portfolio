type ButtonProps = {
    children: React.ReactNode;
  };
  
  export default function Button({ children }: ButtonProps) {
    return (
      <button
        className="
        px-6
        py-3
        rounded-xl
        bg-blue-600
        text-white
        font-medium
        hover:bg-blue-700
        transition-all
        duration-300"
      >
        {children}
      </button>
    );
  }