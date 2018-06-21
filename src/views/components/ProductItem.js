import React from "react";
import PropTypes from "prop-types";

export function formatNumber(num) {
  return (Number(num) / 100).toFixed(2);
}

export default function ProductItem({ item }) {
  const {
    title,
    description,
    image,
    price,
    currency,
    priceLabel,
    productLabel,
    cta,
    ctaLink
  } = item;

  return (
    <article className="c-product-item">
      <header className="c-product-item__header">
        {productLabel ? (
          <span
            className={`c-product-item__label c-product-item__label--${productLabel}`}
          >
            {productLabel}
          </span>
        ) : null}
        <img
          className="c-product-item__image"
          src={image.path}
          alt={image.alt}
        />
      </header>
      <div className="c-product-item__copy">
        <h3 className="c-product-item__title">{title}</h3>
        <p className="c-product-item__description">{description}</p>
        <p className="c-product-item__pricecontainer">
          <span className="c-product-item__pricelabel">{priceLabel}</span>{" "}
          <span className="c-product-item__price">
            {currency}
            {formatNumber(price)}
          </span>
        </p>
        <a className="c-product-item__link" href={ctaLink}>
          <strong>{cta}</strong>
        </a>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      path: PropTypes.string,
      alt: PropTypes.string
    }),
    price: PropTypes.number,
    currency: PropTypes.string,
    priceLabel: PropTypes.string,
    productLabel: PropTypes.string,
    cta: PropTypes.string,
    ctaLink: PropTypes.string
  })
};
