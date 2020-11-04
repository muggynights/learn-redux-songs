import React from "react";
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
   // console.log(props);

   if (!song) {
      return <div>Select a song</div>;
   }
   return (
       <div>
          <h3>Details for:</h3>
          <p>
             Title: {song.title}
             <br/>
             Duration: {song.duration}
          </p>
       </div>
   );
};

// We want to wrap the SongDetail with the 'connect' component, so we can get info
// out of our redux store.
const mapStateToProps = (state) => {
   return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);