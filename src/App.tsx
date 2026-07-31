import { useState, useMemo } from 'react';
import { PageTab, Product, CartItem, FilterState } from './types';
import { featuredDeals, productsCatalog } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ShopView } from './views/ShopView';
import { PortfolioView } from './views/PortfolioView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('shop');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    minPrice: '',
    maxPrice: '',
    sortBy: 'relevance',
    searchQuery: '',
  });

  // Keep search in sync
  const currentSearch = searchQuery || filters.searchQuery;

  // Filter products
  const filteredProducts = useMemo(() => {
    return productsCatalog.filter((product) => {
      // Search match
      if (currentSearch) {
        const query = currentSearch.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesSpecs = product.specs.some(
          (s) =>
            s.label.toLowerCase().includes(query) ||
            s.value.toLowerCase().includes(query)
        );
        if (
          !matchesTitle &&
          !matchesBrand &&
          !matchesCat &&
          !matchesDesc &&
          !matchesSpecs
        ) {
          return false;
        }
      }

      // Categories match
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }

      // Brands match
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }

      // Min Price
      if (filters.minPrice && product.price < Number(filters.minPrice)) {
        return false;
      }

      // Max Price
      if (filters.maxPrice && product.price > Number(filters.maxPrice)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'newest') return b.id.localeCompare(a.id);
      return 0; // relevance
    });
  }, [filters, currentSearch]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col font-sans dot-pattern">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        onRequestQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {activeTab === 'shop' && (
          <ShopView
            featuredDeals={featuredDeals}
            products={filteredProducts}
            filters={filters}
            setFilters={setFilters}
            onAddToCart={handleAddToCart}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onRequestQuote={() => setIsQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioView onRequestQuote={() => setIsQuoteModalOpen(true)} />
        )}

        {activeTab === 'services' && (
          <ServicesView onRequestQuote={() => setIsQuoteModalOpen(true)} />
        )}

        {activeTab === 'about' && <AboutView />}

        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onRequestQuote={() => setIsQuoteModalOpen(true)}
      />
    </div>
  );
}
