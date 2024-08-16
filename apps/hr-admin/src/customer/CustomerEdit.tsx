import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="DefaultSalePriceTypeId"
          source="DefaultSalePriceTypeId"
        />
        <TextInput label="Address" source="address" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Credit" source="credit" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <NumberInput label="Debit" source="debit" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput label="FirstBalance" source="firstBalance" />
        <DateTimeInput label="FirstBalanceDate" source="firstBalanceDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsSystem" source="isSystem" />
        <BooleanInput label="IsUnderRevision" source="isUnderRevision" />
        <NumberInput label="MaxAllowedDebit" source="maxAllowedDebit" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <NumberInput label="PreviousBalance" source="previousBalance" />
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="RevisionDate" source="revisionDate" />
        <NumberInput label="SaleDiscountRate" source="saleDiscountRate" />
        <TextInput label="SupplierId" source="supplierId" />
        <TextInput label="TaxNumber" source="taxNumber" />
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
