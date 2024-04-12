import { Parallax } from 'react-parallax';
import Nasa from '../img/add.jpg';
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt1"> راك مريض ولاعندك واحد من فاميلتك مريض ومعرفتش وشمن طبيب تديه🩺  ولا عييت تروح لطبيب ويقلك هذا ميش التخصص تاعي روح لواحد اوخر فالتخصص الفلاني <br/>...</span>
        </div>
    </Parallax>
);

export default ImageOne