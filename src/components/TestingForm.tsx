import RHFProvider from "../utils/form/RHFProvider";
import RHFInput from "../utils/form/RHFInput";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { Button } from "antd";
import RHFCheckbox from "../utils/form/RHFCheckbox";
import RHFTextArea from "../utils/form/RHFTextArea";
import RHFSwitch from "../utils/form/RHFSwitch";
import RHFSelect from "../utils/form/RHFSelect";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type FormValues = {
  name: string;
  description: string;
  isFootballFan: boolean;
  isCool: boolean;
  goat: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required."),
    description: yup.string(),
    isFootballFan: yup.boolean().required("Are you a football fan?"),
    isCool: yup.boolean().required("Are you cool?"),
    goat: yup.string().required("Messi or Ronaldo"),
  })
  .required();

interface Props {
  onSubmit(data: FormValues): void;
}

function TestingForm({ onSubmit }: Props) {
  const methods = useForm<FormValues>({ resolver: yupResolver(schema) });

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues): void => {
    onSubmit(data);
  };

  return (
    <RHFProvider
      className={styles.form__test}
      methods={methods}
      submitHandler={submitHandler}
    >
      <RHFInput
        addonBefore={"Name"}
        name="name"
        size="middle"
        placeholder="What is your name?"
      />

      <RHFTextArea
        name="description"
        placeholder="Something about yourself..."
        allowClear
        showCount
        autoSize
        maxLength={150}
        bordered
      />

      <RHFCheckbox
        name="isFootballFan"
        label={"Football fan?"}
        defaultChecked
        defaultValue={true}
      />
      <RHFSwitch
        name="isCool"
        checkedChildren="Cool"
        unCheckedChildren="Grumpy"
        defaultValue={true}
        defaultChecked
      />
      <RHFSelect
        name="goat"
        placeHoldDer="Who is the goat?"
        options={[
          { value: "Messi", label: "Messi" },
          { value: "Ronaldo", label: "Ronaldo" },
        ]}
        title="Who is the goat?"
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </RHFProvider>
  );
}

export default TestingForm;
