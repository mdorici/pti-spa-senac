import './styles.css';
import ProductCard from '../../components/ProductCard';
import { products } from '../../models/product-service';

export default function Catalog() {
  return (
    <>
      <main className="spa-catalog-main">
        <section id="spa-catalog-section" className="spa-container">
            <div className="spa-catalog-cards-container">    
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
            </div>
        </section>
      </main>
    </>
  );
}