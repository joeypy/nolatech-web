import {
  About,
  Contact,
  Counter,
  Footer,
  Hero,
  Information,
  News,
  Products,
  Services,
  Social,
  Videos,
} from "./components";

function App() {
  return (
    <div className="relative">
      <Hero />
      <Counter />
      <About />
      <Services />
      <Information />
      <Videos />
      <Contact />
      <News />
      <Products />
      <Footer />

      <Social />
    </div>
  );
}

export default App;
