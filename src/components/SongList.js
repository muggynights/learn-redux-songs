import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
   // In order to forward the action to Redux (to our reducers), we must call the
   // dispatch function. Take the action that is returned and pass it into
   // the dispatch function.
   renderList() {
      // Do NOT call 'selectSong' directly, bc the action will NOT be forwarded to Redux.
      return this.props.songs.map((song) => {
         return (
             // Class pulled from semantic.ui
             <div className="item" key={song.title}>
                <div className="right floated content">
                   <button
                       className="ui button primary"
                       onClick={() => this.props.selectSong(song)}
                   >
                      Select
                   </button>
                </div>
                <div className="content">{song.title}</div>
             </div>
         );
      });
   }

   render() {
      // console.log(this.props);
      // if at some point in future we were to reference this.props it will === {songs: state.songs}
      return <div className="ui divided list">{this.renderList()}</div>;
   }
}

// By convention we call this: mapStateToProps. We run computation to operate on our state,
// and allow it to be populated to a props.
const mapStateToProps = (state) => {
   // console.log(state);
   return {songs: state.songs};
}

// There is no reference to dispatch here, but React-Redux calls it for us.
// Whenever we call the connect function, it does a special operation on the functions
// inside our object (i.e.{selectSong: selectSong}). It essentially wraps them up in
// another JS function. When we call our new JS function, connect will automatically
// call our action creator, then take the action that gets returned, and then automatically
// call the 'dispatch' function for us with that action.
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
