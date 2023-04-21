import React from "react";
import "./title.css";
import pikachu from "../../images/pikachu.jpeg";
import bulbasaur from '../../images/bulbasaur.jpeg';
import { ChatterProps } from "../../interfaces/chatter";

export const Title: React.FC<ChatterProps> = (props) => {

    let chatter = props.chatter;

  return (
    <>
      <div className={`${chatter == 'blue' ? 'cls-blue ' : 'cls-pink '} cls-title-container`}>
        <div>
          <img src={chatter == 'blue' ? pikachu : bulbasaur}></img>
        </div>
        <div className="cls-title">{props.chatter.charAt(0).toUpperCase() + props.chatter.slice(1)}</div>
      </div>
    </>
  );
};

export default Title;
