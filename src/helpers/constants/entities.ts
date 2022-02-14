const entity = [
  {
    name: "userEntity",
    entity: require("@/entities/user.entity").default
  },
  {
    name: "stockEntity",
    entity: require("@/entities/stock.entity").default
  },
  {
    name: "productEntity",
    entity: require("@/entities/product.entity").default
  }
];

export default entity;
