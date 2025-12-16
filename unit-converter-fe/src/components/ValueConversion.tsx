import { useMemo, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

//centimeter, meter, kilometer, inch, foot, yard, mile
enum Length {
  centimeter = "Centimeter",
  meter = "Meter",
  kilometer = "Kilometer",
  inch = "Inch",
  foot = "Foot",
  yard = "Yard",
  mile = "Mile",
}
//milligram, gram, kilogram, ounce, pound
enum Weigth {
  milligram = "Milligram",
  gram = "Gram",
  kilogram = "Kilogram",
  ounce = "Ounce",
  pound = "Pound",
}
//Celsius, Fahrenheit, Kelvin
enum Temperature {
  celsius = "Celsius",
  fahrenheit = "Fahrenheit",
  kelvin = "Kelvin",
}
const ValueConversion = ({
  type,
}: {
  type: "length" | "weigth" | "temperature";
}) => {
  const [Value, setValue] = useState(0);
  const unitsToUse = useMemo(() => {
    switch (type) {
      case "length":
        return Length;
      case "weigth":
        return Weigth;
      case "temperature":
        return Temperature;
    }
  }, [type]);
  const [conversionFrom, setConversionFrom] = useState<
    keyof typeof unitsToUse | null
  >(null);
  const [conversionTo, setConversionTo] = useState<
    keyof typeof unitsToUse | null
  >(null);
  return (
    <div className="flex flex-col gap-2 w-xl">
      <p>{`Enter the ${type} to convert`}</p>
      <Input
        value={Value}
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            setValue(+e.target.value);
          }
        }}
      />
      <p>Select the unit to convert from</p>
      <Select
        value={conversionFrom ?? ""}
        onValueChange={(value) =>
          setConversionFrom(value as keyof typeof unitsToUse)
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a unit" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(unitsToUse)
            .filter((unit) => unit !== conversionTo)
            .map((unit) => (
              <SelectItem key={unit} value={unit}>
                {unitsToUse[unit as keyof typeof unitsToUse]}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      <p>Select the unit to convert to</p>
      <Select
        value={conversionTo ?? ""}
        onValueChange={(value) =>
          setConversionTo(value as keyof typeof unitsToUse)
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a unit" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(unitsToUse)
            .filter((unit) => unit !== conversionFrom)
            .map((unit) => (
              <SelectItem key={unit} value={unit}>
                {unitsToUse[unit as keyof typeof unitsToUse]}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ValueConversion;
