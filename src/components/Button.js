function Button({ className, onclick, children }) {
  return (
    <button className={className} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
