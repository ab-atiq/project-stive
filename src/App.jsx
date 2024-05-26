import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="container">
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
      <div className="container">
        <h1 className="h1">Hello World!!!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi
          fuga labore officia ratione hic, maxime earum, deleniti fugit ipsa
          laudantium. Sequi minus distinctio incidunt eius, sit enim
          voluptatibus eum.
        </p>
        <div className="flex gap-2">
          <div className="p-10 border border-red-500">01</div>
          <div className="p-10 border border-red-500">02</div>
          <div className="p-10 border border-red-500">03</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
