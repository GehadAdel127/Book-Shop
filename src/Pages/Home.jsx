import layer from '../assets/images/layer-slider-1.png';
import main from '../assets/images/layer-slider-model.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="landingPageSection">
                <div className="homeLeftSide">
                    <h3>Huge collection of <span>best books</span></h3>
                    <p>An online book is a resource in book-like form that is only available to read on the Internet. It differs from the common idea of an e-book.</p>
                    <div className="input">
                        <input type="text" placeholder='Search for books....'/>
                        <button><span className="material-icons">search</span>Search</button>
                    </div>
                </div>
                <div className="homeRightSide">
                    <img src={layer} alt="layerImage" className='layer'/>
                    <img src={main} alt="mainImage" className='main'/>
                </div>
            </div>
        </div>
    );
};

export default Home;