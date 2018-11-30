import albumData from './albumData';
// import shortid from 'shortid';

//check if we got 
console.log('I should be a fan of this', json);
const json = window.localStorage.getItem('albums');
let albums = null;
if(json) {
  albums = JSON.parse(json);
}
else {
  albums = albumData;
  save();
}
function save() {
  window.localStorage.setItem('albums', JSON.stringify(albums));
}
export default {
  getAlbums() {
    return albums;
  },
  getAlbum(id) {
    return albums.find(album => album.id === id);
  },
  addImage(image, album) {
    album.images.push(image);
    save();
  }
};




