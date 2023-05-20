import TestingForm from "./components/TestingForm";
import { useState } from "react";
import JSONViewer from "./components/JSONViewer";
import type { FormValues } from "./components/TestingForm";
function App(): JSX.Element {
  const [data, setData] = useState<FormValues | null>(null);

  const onSubmitHandler = (data: FormValues) => {
    setData(data);
  };
  return (
    <>
      <TestingForm onSubmit={onSubmitHandler} />
      <JSONViewer data={data} />
    </>
  );
}

export default App;
