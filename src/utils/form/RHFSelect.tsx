import React from "react";
import { Select } from "antd";
import { Controller } from "react-hook-form";

type Options = { value: string; label: string }[];

interface Props {
  name: string;
  options: Options;
  [key: string]: any;
  placeHoldDer: string;
}

function RHFSelect({ name, options, placeHoldDer, ...rest }: Props) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          {...rest}
          options={options}
          placeholder={placeHoldDer}
        />
      )}
    />
  );
}

export default RHFSelect;
