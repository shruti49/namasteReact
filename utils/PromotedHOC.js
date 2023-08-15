//High Order Component takes a comp as an arg and return a new comp
//input --> Card
//output --> Card with promoted label
const PromotedHOC = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md p-2">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default PromotedHOC;
