import { Parallax } from 'react-parallax';
import Nasa from '../img/gyneco.jpg';
const ImageFour = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">la gynécologie</span>
        </div>
    </Parallax>
);

export default ImageFour