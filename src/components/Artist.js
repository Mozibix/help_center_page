import React from "react";
import '../styles/artist.scss';
import { artistInfo } from "../userData";

const Artist = () => {
  const artistData = artistInfo.map((artistDetails) => {
    return <ArtistBox {...artistDetails} />;
  });
  return (
    <>
      <section className="artistsection">
        <p className="header">Popular Articles</p>

        <div className="artist">{artistData}</div>
      </section>
    </>
  );
};

const ArtistBox = (props) => {
  return (
    <>
      <div className="artist_flex">
        <div className="dark_box">
          <img src={props.file} alt="file" />
        </div>
        <div className="article_sec">
          <p className="top_text">{props.text}</p>
          <p className="bottom_text">{props.quote}</p>
        </div>
        <div className="next">
          <img src={props.next} alt="next" />
        </div>
      </div>
    </>
  );
};

export default Artist;
