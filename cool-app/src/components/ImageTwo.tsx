import { Parallax } from 'react-parallax';
import picTea from '../img/tea.jpg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={picTea} strength={1000}>
        <div className='content'>
            <span className='img-txt'>image two</span>
        </div>
    </Parallax>
);

export default ImageTwo;