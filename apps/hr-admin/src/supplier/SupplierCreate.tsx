import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Credit" source="credit" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput label="Debit" source="debit" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="paymentVouchers"
          reference="PaymentVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentVoucherTitle} />
        </ReferenceArrayInput>
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="purchaseReturns"
          reference="PurchaseReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseReturnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchases"
          reference="Purchase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Create>
  );
};
