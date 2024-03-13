export default function Practice({ food }) {
  const red = {
    color: 'red',
  };
  return (
    <div>
      좋아하는 음식 <span style={red}>{food}</span>
    </div>
  );
}

Practice.defaultProps = {
  food: '딸기',
};
