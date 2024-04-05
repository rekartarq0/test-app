import { Content } from "./Home/Content/Content";
import { NavBar } from "./Home/NavBar/NavBar";
import { Reklam } from "./Home/Reklam/Reklam";
import { Report } from "./Home/Report/Report";
import { Start } from "./Home/start/Start";
import { Event } from "./Home/Events/Event";
import { PhotoStory } from "./Home/Photo_Story/PhotoStory";
import { Opinion } from "./Home/Opinion/Opinion";
import { Particular } from "./Home/Particular/Particular";
import logo from './assets/logo.png'

import fb from './assets/fb.png'
import { Footer } from "./Home/Footer/Footer";
function App() {
  return (
    <div dir="rtl">
      <NavBar />
      <Start />
      <Reklam />
      <Content />
      <Report />
      <Event />
      <Opinion />
      <PhotoStory />
      <Particular />
      <Footer />
      {/* footer */}






    </div>
  );
}

export default App;
