import { Parallax } from 'react-parallax';
import picBooks from '../img/books.avif';

const ImageOne = () => (
    <Parallax className='image' bgImage={picBooks} strength={1000}>
        <div className='content'>
            <span className='img-txt'>image one</span>
        </div>
    </Parallax>
);

export default ImageOne;