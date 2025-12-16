import { useState } from "react";
import "./App.css";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import ValueConversion from "./components/ValueConversion";

function App() {
  const [selectedTab, setSelectedTab] = useState<
    "length" | "weigth" | "temperature"
  >("length");

  console.log(selectedTab, "REHUL");
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
                  setSelectedTab(value as "length" | "weigth" | "temperature")
                }
                defaultValue={selectedTab}
              >
                <TabsList>
                  <TabsTrigger value="length">Length</TabsTrigger>
                  <TabsTrigger value="weigth">Weigth</TabsTrigger>
                  <TabsTrigger value="temperature">Temperature</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {/* CONTENT */}
            <ValueConversion type={selectedTab} />

            {/* BUTTON */}
            <div className="w-full flex justify-center">
              <Button>Convert</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
