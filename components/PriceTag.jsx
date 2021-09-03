const PriceTag = ({ value, color, borderColor }) => {
  const style = {
    border: `2px solid ${borderColor ? borderColor : color}`,
    color: color,
    borderRadius: "4px",
    fontFamily: `"DM Sans", sans-serif`,
    fontWeight: 700,
    fontSize: "16px",
    padding: "3px 8px",
  };

  return <p style={style}>{value}</p>;
};

export default PriceTag;
