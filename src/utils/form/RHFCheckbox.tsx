import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  [key: string]: any;
}

function RHFCheckbox({ name, label, defaultValue, ...rest }: Props) {
  const methods = useFormContext();
  return (
    <Controller
      control={methods.control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Checkbox {...field} {...rest}>
          {label}
        </Checkbox>
      )}
    />
  );
}

export default RHFCheckbox;
