const { useState, useMemo } = React;

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmounts = useMemo(() => {
    const numericAmount = parseFloat(amount) || 0;
    const amountInUSD = numericAmount / exchangeRates[fromCurrency];
    const results = {};

    for (const currency in exchangeRates) {
      results[currency] = amountInUSD * exchangeRates[currency];
    }

    return results;
  }, [amount, fromCurrency]);

  const finalAmount = convertedAmounts[toCurrency].toFixed(2);

  return (
    <div className="converter-card">
      <h2 className="converter-title">Currency Converter</h2>

      <div className="form-group">
        <label className="form-label" htmlFor="amount-input">
          Amount
        </label>
        <input
          id="amount-input"
          className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="select-row">
        <div className="form-group">
          <label className="form-label" htmlFor="from-select">
            From
          </label>
          <select
            id="from-select"
            className="form-control"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="to-select">
            To
          </label>
          <select
            id="to-select"
            className="form-control"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="result-box">
        <p className="result-label">Converted Amount</p>
        <p className="result-value">{`${finalAmount} ${toCurrency}`}</p>
      </div>
    </div>
  );
}
