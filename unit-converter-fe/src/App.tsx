import { useState } from "react";
import "./App.css";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import ValueConversion from "./components/ValueConversion";
import { Button } from "./components/ui/button";

function App() {
  const [selectedTab, setSelectedTab] = useState<
    "length" | "weight" | "temperature"
  >("length");

  const [output, setOutput] = useState<string | null>(null);
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex justify-center items-center p-24">
          <div className="border-2 border-gray-200  p-4 flex flex-col gap-2 rounded-2xl">
            {/* TITLE */}
            <div className="w-full flex justify-center">
              <p className="text-2xl">Unit Converter</p>
              {/* TABS */}
            </div>
            <div className="w-full flex justify-center">
              <Tabs
                value={selectedTab}
                onValueChange={(value) =>
                  setSelectedTab(value as "length" | "weight" | "temperature")
                }
                defaultValue={selectedTab}
              >
                <TabsList>
                  <TabsTrigger value="length">Length</TabsTrigger>
                  <TabsTrigger value="weight">Weigth</TabsTrigger>
                  <TabsTrigger value="temperature">Temperature</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* CONTENT */}
            {output ? (
              <div className="flex flex-col gap-2 w-xl">
                <div className="w-full flex flex-col items-center justify-center">
                  <p>Result of your calculation</p>
                  <p className="text-xl">{output}</p>
                  <Button className="mt-2" onClick={() => setOutput(null)}>
                    Reset
                  </Button>
                </div>
              </div>
            ) : (
              <ValueConversion type={selectedTab} setOutput={setOutput} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
