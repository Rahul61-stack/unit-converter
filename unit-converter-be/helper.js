const LENGTH_TO_METER = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
};

const WEIGHT_TO_GRAM = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.349523125,
  pound: 453.59237,
};

function convertLength(value, from, to) {
  const meters = value * LENGTH_TO_METER[from];
  return meters / LENGTH_TO_METER[to];
}

function convertWeight(value, from, to) {
  const grams = value * WEIGHT_TO_GRAM[from];
  return grams / WEIGHT_TO_GRAM[to];
}

function convertTemperature(value, from, to) {
  let celsius;

  switch (from.toLowerCase()) {
    case "celsius":
      celsius = value;
      break;
    case "fahrenheit":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = value - 273.15;
      break;
    default:
      throw new Error(`Unknown temperature unit: ${from}`);
  }

  switch (to.toLowerCase()) {
    case "celsius":
      return celsius;
    case "fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "kelvin":
      return celsius + 273.15;
    default:
      throw new Error(`Unknown temperature unit: ${to}`);
  }
}

export function convert(data) {
  const { value, conversionFrom, conversionTo } = data;

  const from = conversionFrom.toLowerCase();
  const to = conversionTo.toLowerCase();

  if (LENGTH_TO_METER[from] && LENGTH_TO_METER[to]) {
    return convertLength(value, from, to);
  } else if (WEIGHT_TO_GRAM[from] && WEIGHT_TO_GRAM[to]) {
    return convertWeight(value, from, to);
  } else if (
    ["celsius", "fahrenheit", "kelvin"].includes(from) &&
    ["celsius", "fahrenheit", "kelvin"].includes(to)
  ) {
    return convertTemperature(value, from, to);
  } else {
    throw new Error("Invalid conversion: units must be of the same type");
  }
}
