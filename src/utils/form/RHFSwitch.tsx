import React from "react";
import { Switch } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  [key: string]: any;
}

function RHFSwitch({ name, defaultValue, ...rest }: Props) {
  const methods = useFormContext();
  return (
    <Controller
      control={methods.control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Switch {...field} {...rest}>
          {name}
        </Switch>
      )}
    />
  );
}

export default RHFSwitch;
