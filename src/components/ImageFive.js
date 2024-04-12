import { Parallax } from 'react-parallax';
import Nasa from '../img/ophtalmo.jpg';
const ImageFive = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">L'ophtalmologie</span>
        </div>
    </Parallax>
);

export default ImageFive