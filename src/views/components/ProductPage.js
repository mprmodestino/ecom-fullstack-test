import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";
import "../../stylesheets/listingPage.scss";

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProductsIfNeeded();
  }

  componentDidUpdate(prevProps) {
    if (this.props.products.items !== prevProps.products.items) {
      this.props.fetchProductsIfNeeded();
    }
  }

  render() {
    const { items, isFetching } = this.props.products;
    return (
      <div>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty.</h2>}
        {items.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <ProductList items={items} />
          </div>
        )}
      </div>
    );
  }
}

ProductPage.propTypes = {
  products: PropTypes.shape({
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  })
};

export default ProductPage;
