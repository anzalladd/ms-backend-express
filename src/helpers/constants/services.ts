const services = [
  {
    name: "authService",
    service: require("@/services/AuthService").default
  },
  {
    name: "stockService",
    service: require("@/services/StockService").default
  }
];

export default services;
