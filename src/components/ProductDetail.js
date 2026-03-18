import React from 'react';
import { useRouter } from 'next/router';
import productsData from '../Products/productsData'; // Assuming you have a file with product data


const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  // Find the product based on the provided productId
  const product = productsData.find((p) => p.id === id);

  // If product with the provided id is not found, you can handle it accordingly
  if (!product) {
    return <main className="page-shell"><section className="page-section"><div className="cta-panel"><h2>Product not found.</h2></div></section></main>;
  }

  const { name, image, description } = product;

  return (
    <main className="page-shell">
      <section className="page-hero editorial-page-hero compact-hero">
        <div className="page-hero-grid">
          <div>
            <p className="section-kicker">Product Detail</p>
            <h1 className="page-title">{name}</h1>
          </div>
          <p className="page-summary">{description}</p>
        </div>
      </section>
      <section className="page-section product-story-grid">
        <article className="variant-card-editorial wide-variant-card">
          <img src={image.src || image} alt={name} className="variant-image" loading="lazy" />
        </article>
      </section>
      <section className="page-section">
        <div className="suggestion-buttons editorial-chip-row">
          {productsData
            .filter((p) => p.id !== id)
            .map((suggestion) => (
              <button key={suggestion.id} className="rounded-btn editorial-chip">
                {suggestion.name}
              </button>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
