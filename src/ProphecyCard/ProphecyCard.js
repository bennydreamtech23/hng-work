import './ProphecyCard.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export default function ProphecyCard( { prophecies }) {
  const { id, prophecy , pastor,  image} = prophecies 
  
  return (
    <div className="ProphecyCard" id={id}>
         <div className="prophecy">
             <RiDoubleQuotesL className="quote"/>{prophecy} <RiDoubleQuotesR className="quote" />
         </div>
         
         <div className="span"></div>
         <div  className="CardInfo">
             <img src={image} alt={pastor} className="image"/>
             <p className="pastor">{pastor}</p>
         </div>
    </div>
  );
}
