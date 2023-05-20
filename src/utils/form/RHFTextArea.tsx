import React from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  [key: string]: any;
}

function RHFInput({ name, ...rest }: Props) {
  const methods = useFormContext();
  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field }) => <Input.TextArea {...field} {...rest} />}
    />
  );
}

export default RHFInput;
