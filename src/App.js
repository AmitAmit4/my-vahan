// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Features';
import FooterOne from './FooterOne';
import Header from './Header';
// import OurTestimonials from './OurTestimonials';
// import QuestionRelatedToVahan from './QuestionRelatedToVahan';
// import SectionFirst from './SectionFirst';
// import VahaanFeatures from './VahaanFeatures';
// import VahanPhones from './VahanPhones';
// import WhyChooseVahaan from './WhyChooseVahaan';
// import PracticeOne from './PracticeOne';
// import PracticeTwo from './PracticeTwo';
// import VahanFeaturesOne from './VahanFeaturesOne';
import Home from './Home';
// import PracticeTwo from './PracticeTwo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feature" element={<Features/>} />
       {/* <SectionFirst/> */}
        {/* <PracticeOne/>
        <VahaanFeatures/>
        <WhyChooseVahaan/>
        <VahanPhones/>
        <OurTestimonials/>
        <VahanFeaturesOne/> */}
       {/* <QuestionRelatedToVahan/> */}
       </Routes>
       <FooterOne/>
       </BrowserRouter>
    </div>
  );
}

export default App;
