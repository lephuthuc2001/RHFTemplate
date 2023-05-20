import React from "react";
import RHFProvider from "../utils/form/RHFProvider";
import RHFInput from "../utils/form/RHFInput";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { Button } from "antd";
import RHFCheckbox from "../utils/form/RHFCheckbox";
import RHFTextArea from "../utils/form/RHFTextArea";
import RHFSwitch from "../utils/form/RHFSwitch";
import RHFSelect from "../utils/form/RHFSelect";

export type FormValues = {
  title: string;
  description: string;
  isDone: boolean;
  isCool: boolean;
  goat: "string";
};

interface Props {
  onSubmit(data: FormValues): void;
}

function TestingForm({ onSubmit }: Props) {
  const methods = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues): void => {
    onSubmit(data);
  };

  return (
    <RHFProvider
      className={styles.form__test}
      methods={methods}
      submitHandler={submitHandler}
    >
      <RHFInput name="title" size="middle" placeholder="Type something" />
      <RHFTextArea name="description" placeholder="Write something" />
      <RHFCheckbox name="isDone" />
      <RHFSwitch
        name="isCool"
        checkedChildren="COOL"
        unCheckedChildren="not so cool"
        defaultChecked={true}
      />
      <RHFSelect
        name="goat"
        placeHoldDer="Who is the goat?"
        options={[
          { value: "messi", label: "Messi" },
          { value: "ronaldo", label: "Ronaldo" },
        ]}
        title="Who is the gooooooat?"
      />
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </RHFProvider>
  );
}

export default TestingForm;
