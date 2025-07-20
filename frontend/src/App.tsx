
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsPreview from "@/components/ProductsPreview";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

function App() {
  // 2. Renderize os componentes em ordem
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProductsPreview />
        <Events />
      </main>
      <Footer />
    </>
  );
}

export default App;