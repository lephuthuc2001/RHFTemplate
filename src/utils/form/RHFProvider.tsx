import { ReactNode } from "react";
import { FormProvider, UseFormReturn, SubmitHandler } from "react-hook-form";
import type { FormValues } from "../../components/TestingForm";

interface Props {
  methods: UseFormReturn<FormValues>;
  submitHandler: SubmitHandler<FormValues>;
  children: ReactNode;
  className?: string;
}

function RHFProvider(props: Props) {
  const { handleSubmit } = props.methods;
  return (
    <FormProvider {...props.methods}>
      <form
        className={props.className}
        onSubmit={handleSubmit(props.submitHandler)}
      >
        {props.children}
      </form>
    </FormProvider>
  );
}

export default RHFProvider;
