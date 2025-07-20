import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsPreview from "@/components/ProductsPreview";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProductsPreview />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
