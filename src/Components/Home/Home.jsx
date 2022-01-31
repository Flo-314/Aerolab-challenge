import LandingSection from "./LandingSection";
import ProductSection from "./ProductionSection/ProductSection";
import WalkthroughSection from "./WalkthroughSection/WalkthroughSection";
function Home({sort, sortProducts, user, handleSellProducts, handleMovePage}) {
  return (
    <main>
      <LandingSection />
      <WalkthroughSection />
      <ProductSection
        handleMovePage={handleMovePage}
        handleSellProducts={handleSellProducts}
        sort={sort}
        sortProducts={sortProducts}
        user={user}
      />
    </main>
  );
}

export default Home;
