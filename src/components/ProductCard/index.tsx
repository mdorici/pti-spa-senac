import { useState } from 'react';
import './styles.css';
import { ProductDTO } from '../../models/product-dto';

type Props = {
  product: ProductDTO;
};

export default function ProductCard({ product }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`card-product ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <img src={product.imgUrl} alt={product.name} className="product-image" />
      <p className={`product-name ${isSelected ? 'selected' : ''}`}>{product.name}</p>
      <p className={`product-price ${isSelected ? 'selected' : ''}`}>
        <b>$ {product.price.toFixed(2)}</b>
      </p>
      <button className={`add-button ${isSelected ? 'selected' : ''}`}>+</button>
    </div>
  );
}
