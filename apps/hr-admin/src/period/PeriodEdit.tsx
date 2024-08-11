import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";

export const PeriodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="installmentSaleFeePostingPeriod.id"
          reference="PaymentTerm"
          label="InstallmentSaleFeePostingPeriod"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="paymentTerms.id"
          reference="PaymentTerm"
          label="PaymentTerms"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
