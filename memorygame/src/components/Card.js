import React, {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';
import backface from '../images/duda.jpeg';

const Card = ({ name, number, frontf, flipCard, unflippedCard, disabledCard }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    //Que se ejecute cada vez que los arreglos sean modificados
    useEffect(() => {
        if(unflippedCard.includes(number)) {
            //se le da tiempo 
            setTimeout(() => setIsFlipped(false), 700);
        }
    }, [unflippedCard]);

    useEffect(() => {
        if(disabledCard.includes(number)) {
            setHasEvent(false);   
        }
    }, [disabledCard]);

    const handleClick = e => {
        const value = flipCard(name, number);
        if(value !== 0) {
            setIsFlipped(!isFlipped);
        }  
    }

    return (
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped}>
                <img className="card-image" src={backface} alt="back-face" onClick={hasEvent ? handleClick: null}/>
                <img className="card-image" src={frontf} alt="front-face" onClick={hasEvent ? handleClick: null}/>
            </ReactCardFlip>
        </div>
    )
        
}

export default Card;