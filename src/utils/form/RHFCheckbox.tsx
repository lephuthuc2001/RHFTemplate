import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  [key: string]: any;
}

function RHFCheckbox({ name, ...rest }: Props) {
  const methods = useFormContext();
  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field }) => (
        <Checkbox {...field} {...rest}>
          {name}
        </Checkbox>
      )}
    />
  );
}

export default RHFCheckbox;
