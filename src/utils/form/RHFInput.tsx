import React from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "./Styles.module.scss";
interface Props {
  name: string;
  [key: string]: any;
}

function RHFInput({ name, ...rest }: Props) {
  const methods = useFormContext();
  return (
    <div>
      <Controller
        control={methods.control}
        name={name}
        render={({ field }) => <Input {...field} {...rest} />}
      />
      <ErrorMessage
        errors={methods.formState.errors}
        name={name}
        render={({ message }) => (
          <div className={styles.error__msg}>{message}</div>
        )}
      />
    </div>
  );
}

export default RHFInput;
