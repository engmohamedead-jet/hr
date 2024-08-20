import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";
import { ReceiptVoucherTitle } from "../receiptVoucher/ReceiptVoucherTitle";

export const AccountTransactionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="paymentVouchers"
          reference="PaymentVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentVoucherTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="receiptVouchers.id"
          reference="ReceiptVoucher"
          label="ReceiptVouchers"
        >
          <SelectInput optionText={ReceiptVoucherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
