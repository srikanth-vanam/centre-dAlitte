import "./Card.css";
const Card = (props) => {
  const { src, h3, h5 } = props.item;
  return (
    <div className="cardProof">
      <div className="cardLeft">
        <img src={src} alt="person saying his/her experience" />
      </div>
      <div className="cardRight">
        <h3>{h3}</h3>
        <h5>{h5}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          fugiat provident voluptates obcaecati dolor vitae possimus itaque eius
          odio officiis!
        </p>
      </div>
    </div>
  );
};

export default Card;
