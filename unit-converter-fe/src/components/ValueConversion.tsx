import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { getUnitConversion } from "@/services/service";

//centimeter, meter, kilometer, inch, foot, yard, mile
enum Length {
  Centimeter = "Centimeter",
  Meter = "Meter",
  Kilometer = "Kilometer",
  Inch = "Inch",
  Foot = "Foot",
  Yard = "Yard",
  Mile = "Mile",
}
//milligram, gram, kilogram, ounce, pound
enum Weight {
  Milligram = "Milligram",
  Gram = "Gram",
  Kilogram = "Kilogram",
  Ounce = "Ounce",
  Pound = "Pound",
}
//Celsius, Fahrenheit, Kelvin
enum Temperature {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Kelvin = "Kelvin",
}

export const unitAbbreviations: Record<Length | Weight | Temperature, string> =
  {
    // Length
    [Length.Centimeter]: "cm",
    [Length.Meter]: "m",
    [Length.Kilometer]: "km",
    [Length.Inch]: "in",
    [Length.Foot]: "ft",
    [Length.Yard]: "yd",
    [Length.Mile]: "mi",

    // Weight
    [Weight.Milligram]: "mg",
    [Weight.Gram]: "g",
    [Weight.Kilogram]: "kg",
    [Weight.Ounce]: "oz",
    [Weight.Pound]: "lb",

    // Temperature
    [Temperature.Celsius]: "°C",
    [Temperature.Fahrenheit]: "°F",
    [Temperature.Kelvin]: "K",
  };
const ValueConversion = ({
  type,
  setOutput,
}: {
  type: "length" | "weight" | "temperature";
  setOutput: Dispatch<SetStateAction<string | null>>;
}) => {
  const [value, setValue] = useState(0);
  const unitsToUse = useMemo(() => {
    switch (type) {
      case "length":
        return Length;
      case "weight":
        return Weight;
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

  const handleUnitConversion = async () => {
    try {
      const response = await getUnitConversion(
        value,
        conversionFrom,
        conversionTo
      );
      if (response && conversionFrom && conversionTo) {
        console.log(conversionFrom, conversionTo);
        setOutput(
          `${value} ${unitAbbreviations[conversionFrom]} = ${Number(
            response.data
          ).toFixed(2)} ${
            unitAbbreviations[conversionTo as keyof typeof unitAbbreviations]
          }`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-2 w-xl">
      <p>{`Enter the ${type} to convert`}</p>
      <Input
        value={value}
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

      {/* BUTTON */}
      <div className="w-full flex justify-center">
        <Button
          onClick={() => {
            handleUnitConversion();
          }}
        >
          Convert
        </Button>
      </div>
    </div>
  );
};

export default ValueConversion;
