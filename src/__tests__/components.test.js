import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";
import ProductList from "../views/components/ProductList";
import ProductItem from "../views/components/ProductItem";

Enzyme.configure({ adapter: new Adapter() });

describe("components", () => {
  describe("Product List", () => {
    it("should render self", () => {
      const enzymeWrapper = shallow(<ProductList items={[]} />);
      expect(enzymeWrapper.find("section").hasClass("c-product-list")).toBe(
        true
      );
      expect(enzymeWrapper.find("ProductItem").length).toEqual(0);
    });
    it("should render self and subcomponents", () => {
      const items = [
        {
          title: "Simple Canvas",
          description: "Lets your pictures speak for themselves.",
          image: {
            path: "/images/product.jpg",
            alt: "Simple Canvas"
          },
          price: 1500,
          currency: "£",
          priceLabel: "From",
          productLabel: "bestseller",
          cta: "Shop Now",
          ctaLink: "/random/link/to/no/where"
        },
        {
          title: "Collage Canvas",
          description:
            "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
          image: {
            path: "/images/product.jpg",
            alt: "Collage Canvas"
          },
          price: 2500,
          currency: "£",
          priceLabel: "From",
          productLabel: "",
          cta: "Shop Now",
          ctaLink: "/random/link/to/no/where"
        }
      ];
      const enzymeWrapper = shallow(<ProductList items={items} />);
      expect(enzymeWrapper.find("ProductItem").length).toEqual(2);
      expect(toJson(enzymeWrapper)).toMatchSnapshot();
    });
  });
  describe("Product Item regular", () => {
    const item = {
      title: "Simple Canvas",
      description: "Lets your pictures speak for themselves.",
      image: {
        path: "/images/product.jpg",
        alt: "Simple Canvas"
      },
      price: 1500,
      currency: "£",
      priceLabel: "From",
      cta: "Shop Now",
      ctaLink: "/random/link/to/no/where"
    };
    const enzymeWrapper = shallow(<ProductItem item={item} />);

    it("should render self", () => {
      expect(enzymeWrapper.find("article").hasClass("c-product-item")).toBe(
        true
      );
    });
    it("should render title", () => {
      expect(enzymeWrapper.find(".c-product-item__title").length).toEqual(1);
      expect(enzymeWrapper.find(".c-product-item__title").text()).toBe(
        "Simple Canvas"
      );
    });
    it("should render description", () => {
      expect(enzymeWrapper.find(".c-product-item__description").length).toEqual(
        1
      );
      expect(enzymeWrapper.find(".c-product-item__description").text()).toBe(
        "Lets your pictures speak for themselves."
      );
    });
    it("should render price", () => {
      expect(
        enzymeWrapper.find(".c-product-item__pricecontainer").length
      ).toEqual(1);
      expect(enzymeWrapper.find(".c-product-item__pricecontainer").text()).toBe(
        `From £${(Number(1500) / 100).toFixed(2)}`
      );
    });
    it("should render link", () => {
      expect(enzymeWrapper.find(".c-product-item__link").length).toEqual(1);

      expect(enzymeWrapper.find(".c-product-item__link").text()).toBe(
        `Shop Now`
      );
    });
    it("should render image", () => {
      expect(enzymeWrapper.find(".c-product-item__image").length).toEqual(1);
    });
  });
  describe("Product Item best seller", () => {
    const item = {
      title: "Simple Canvas",
      description: "Lets your pictures speak for themselves.",
      image: {
        path: "/images/product.jpg",
        alt: "Simple Canvas"
      },
      price: 1500,
      currency: "£",
      priceLabel: "From",
      productLabel: "bestseller",
      cta: "Shop Now",
      ctaLink: "/random/link/to/no/where"
    };
    const enzymeWrapper = shallow(<ProductItem item={item} />);
    it("should render item label", () => {
      expect(enzymeWrapper.find(".c-product-item__label").text()).toBe(
        "bestseller"
      );
    });
  });
});
