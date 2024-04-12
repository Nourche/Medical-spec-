import { Parallax } from 'react-parallax';
import Nasa from '../img/cardio.jpg';
const ImageSix = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">la cardiologie</span>
        </div>
    </Parallax>
);

export default ImageSix