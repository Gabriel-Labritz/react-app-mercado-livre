const formatCurrency = (value, currency) => {
  return value.toLocaleString(currency, {
    style: 'currency',
    currency: currency
  });
};

export default formatCurrency;
