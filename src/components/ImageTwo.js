import { Parallax } from 'react-parallax';
import Satellite from '../img/ped.jpg';

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt" >pédiatrie </span>
        </div>
    </Parallax>
);

export default ImageTwo