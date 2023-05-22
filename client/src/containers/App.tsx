
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from '../components/Navbar';
// import SpecialOffersSlider from '../components/SpecialOffersSlider';
import store from '../store/Store';

store.subscribe(() => {
  const state = store.getState()
  document.body.className = state.theme.value
  console.log('Current slide: ' + state.specialOffersSlider.currentSlideIndex)
});

// const slides = [
//   {url: 'https://media.discordapp.net/attachments/650262473840263223/1086185861210710097/image.png', title: 'DJ Khaled'},
//   {url: 'https://media.discordapp.net/attachments/609380184168333337/1105834010191605770/20230510_152655.jpg', title: 'Finka'},
//   {url: 'https://media.tenor.com/l9-I4gLsh34AAAAd/kanye-ostinka.gif', title: 'Yee'},
//   {url: 'https://cdn.discordapp.com/attachments/361557974390407168/1101287387159613590/Screenshot_200.png', title: 'Snosi vso'},
//   {url: 'https://cdn.discordapp.com/attachments/650262473840263223/1105969545421783050/d1119e5a7220d2b4.jpg', title: 'Snosi vso'},
//   {url: 'https://cdn.discordapp.com/attachments/650262473840263223/1105970499139403806/Screenshot_89.png', title: 'Snosi vso'},
//   {url: 'https://cdn.discordapp.com/attachments/650262473840263223/1105970455619313815/2022-07-03_01.09.46.png', title: 'Snosi vso'},
//   {url: 'https://cdn.discordapp.com/attachments/650262473840263223/1105971629466595428/Screen_Shot_2019-03-14_at_2.43.33_PM.png', title: 'Snosi vso'},
// ]

// const slides = [
//   {url: 'https://media.tenor.com/3078aYE1qboAAAAd/%D0%B8%D0%BD%D1%82%D1%80%D0%BE-intro.gif', title: 'DJ Khaled'},
//   {url: 'https://media.tenor.com/Mx_SVL8P_3wAAAAd/%D0%B8%D0%BD%D1%82%D1%80%D0%BE-intro.gif', title: 'Finka'},
//   {url: 'https://media.tenor.com/AAZyZLxX8OYAAAAd/%D0%B8%D0%BD%D1%82%D1%80%D0%BE-%D0%BD%D0%B0%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB.gif', title: 'Yee'},
//   {url: 'https://media.tenor.com/WAS6MYUN45oAAAAd/%D0%B8%D0%BD%D1%82%D1%80%D0%BE-intro.gif', title: 'Snosi vso'},
//   {url: 'https://media.tenor.com/jeFRb1ZiB50AAAAd/%D0%B8%D0%BD%D1%82%D1%80%D0%BE-intro.gif', title: 'Snosi vso'},
// ]
// store.dispatch(setSlides(slides))

const Home = () => (
  <div>
    <h2>Главная страница</h2>
  </div>
);

const Map = () => (
  <div>
    <iframe src='http://www.alkronos.ru/map' title='minecraft-map' className='map'></iframe>
  </div>
);


const App = () => {


  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/wiki" element={<Home/>} />
            <Route path="/map" element={<Map/>} />
          </Routes>
          {/* <SpecialOffersSlider /> */}
        </div>
      </Router>
    </Provider>
  );
};

export default App;