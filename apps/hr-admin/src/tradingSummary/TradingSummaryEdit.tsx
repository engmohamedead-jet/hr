import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";

export const TradingSummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FiscalWeekId" source="fiscalWeekId" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="PartyId" source="partyId" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="PriceTotal" source="priceTotal" />
        <TextInput label="ProductId" source="productId" />
        <TextInput label="ProductVariantId" source="productVariantId" />
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <DateTimeInput label="TransactionDate" source="transactionDate" />
        <TextInput label="TransactionTypeId" source="transactionTypeId" />
        <TextInput label="UnitId" source="unitId" />
      </SimpleForm>
    </Edit>
  );
};
