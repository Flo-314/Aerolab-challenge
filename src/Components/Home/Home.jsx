import LandingSection from "./LandingSection";
import ProductSection from "./ProductionSection/ProductSection";
import WalkthroughSection from "./WalkthroughSection/WalkthroughSection";
function Home({sort, sortProducts, user, handleSellProducts}) {
  return (
    <main>
      <LandingSection />
      <WalkthroughSection />
      <ProductSection
        handleSellProducts={handleSellProducts}
        sort={sort}
        sortProducts={sortProducts}
        user={user}
      />
    </main>
  );
}

export default Home;
