import TestingForm from "./components/TestingForm";
import { useState } from "react";
import type { FormValues } from "./components/TestingForm";
import JSONPretty from "react-json-pretty";

var JSONPrettyAdv = require("react-json-pretty/dist/adventure_time");

const initalValue: FormValues = {
  name: "",
  description: "",
  isFootballFan: true,
  isCool: true,
  goat: "",
};
function App(): JSX.Element {
  const [data, setData] = useState<FormValues>(initalValue);

  const onSubmitHandler = (data: FormValues) => {
    setData(data);
  };
  return (
    <>
      <TestingForm onSubmit={onSubmitHandler} />
      <JSONPretty
        theme={JSONPrettyAdv}
        themeClassName="custom-json-pretty"
        data={data}
        id="json-viewer"
      ></JSONPretty>
    </>
  );
}

export default App;
