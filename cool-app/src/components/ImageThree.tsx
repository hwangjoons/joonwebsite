import { Parallax } from 'react-parallax';
import picKr from '../img/kr.jpg';

const ImageThree = () => (
    <Parallax className='image' bgImage={picKr} strength={1000}>
        <div className='content'>
            <span className='img-txt'>image three</span>
        </div>
    </Parallax>
);

export default ImageThree;