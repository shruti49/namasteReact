//High Order Component takes a comp as an arg and return a new comp
//input --> Card
//output --> Card with promoted label
const PromotedHOC = (Card) => {
  return (props) => {
    return (
      <div>
        <label className=" bg-black text-white">Promoted</label>
        <Card {...props} />
      </div>
    );
  };
};

export default PromotedHOC;
