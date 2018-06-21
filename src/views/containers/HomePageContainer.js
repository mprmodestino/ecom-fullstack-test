import { connect } from "react-redux";
import { fetchProductsIfNeeded } from "../../actions/products";
import ProductPage from "../components/ProductPage";

const mapStateToProps = state => {
  const { isFetching, items } = state.products;
  return {
    products: {
      isFetching,
      items
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsIfNeeded() {
      dispatch(fetchProductsIfNeeded());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
