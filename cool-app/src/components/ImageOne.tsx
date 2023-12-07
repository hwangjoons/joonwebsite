import { Parallax } from 'react-parallax';
import picBooks from '../img/books.avif';

const ImageOne = () => (
    <Parallax bgImage={picBooks} strength={800}>
        <div className='content'>
            <span className='img-txt'>old books</span>
        </div>
    </Parallax>
);

export default ImageOne;