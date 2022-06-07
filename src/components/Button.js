import propTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: propTypes.string,
  text: propTypes.string,
};
Button.defaultPops = {
  color: "steelblue",
};
export default Button;
