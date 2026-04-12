import albumData from './albumData';
import shortid from 'shortid';


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
  add(album) {
    album.id = shortid.generate();
    album.images = [];
    albums.push(album);
    save();
    return album;
  },
  addImage(image, album) {
    image.id = shortid.generate();
    album.images.push(image);
    save();
  },
  updateImage(album, updatedImage) {
    const index = album.images.findIndex(img => img.id === updatedImage.id);
  album.images.splice(index, 1, updatedImage);
save();
}
};




