import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PurchaseDetailTitle } from "../purchaseDetail/PurchaseDetailTitle";
import { PurchaseReturnDetailTitle } from "../purchaseReturnDetail/PurchaseReturnDetailTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PurchasePriceTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="purchaseDetails.id"
          reference="PurchaseDetail"
          label="PurchaseDetails"
        >
          <SelectInput optionText={PurchaseDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseReturnDetails.id"
          reference="PurchaseReturnDetail"
          label="PurchaseReturnDetails"
        >
          <SelectInput optionText={PurchaseReturnDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseReturns.id"
          reference="PurchaseReturn"
          label="PurchaseReturns"
        >
          <SelectInput optionText={PurchaseReturnTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchases.id"
          reference="Purchase"
          label="Purchases"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
