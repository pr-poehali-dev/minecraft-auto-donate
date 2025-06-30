import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonationPackages from "@/components/DonationPackages";
import ShopCategories from "@/components/ShopCategories";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <DonationPackages />
      <ShopCategories />
      <ProductGrid />
    </div>
  );
};

export default Index;
