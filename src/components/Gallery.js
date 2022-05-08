import Header from './Header';
import data from '../image';
import GalleryMain from './GalleryMain';

function Gallery() {
    const { images} = data;
  return (
    <div className="App">
        <Header pageName='Gallery' project='3'/>
        <GalleryMain  images={images} style={{height:"100%"}}></GalleryMain>
    </div>
  );

}

export default Gallery;