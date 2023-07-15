//High Order Component takes a comp as an arg and return a new comp
//input --> Card
//output --> Card with promoted label
const PromotedHOC = (Card) => {
  return (props) => {
    return (
      <div className="absolute m-1 p-1 rounded-lg bg-black text-white">
        <label>Promoted</label>
        <Card {...props} />
      </div>
    );
  };
};

export default PromotedHOC;
