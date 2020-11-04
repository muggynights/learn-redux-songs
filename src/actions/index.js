// Using index.js is a pattern you'll see in most React projects. It's a shortcut.
// If you don't specify a file in a directory, WebPack (tool that joins all our files together)
// will automatically give you an index.js file.

// Action creator.
// We refer to this as an Action creator, but there is nothing in Redux that maps (or knows),
// that this is an Action Creator function. It's a regular JS function.
export const selectSong = (song) => {
   // Return an action.
   return {
      type: 'SONG_SELECTED',
      payload: song
   };
};
// Named export, allow to export many different functions from a single file.

