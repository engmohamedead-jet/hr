import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PURCHASEDETAIL_TITLE_FIELD } from "../purchaseDetail/PurchaseDetailTitle";
import { PURCHASERETURNDETAIL_TITLE_FIELD } from "../purchaseReturnDetail/PurchaseReturnDetailTitle";
import { PURCHASERETURN_TITLE_FIELD } from "../purchaseReturn/PurchaseReturnTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const PurchasePriceTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="PurchaseDetails"
          source="purchasedetail.id"
          reference="PurchaseDetail"
        >
          <TextField source={PURCHASEDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PurchaseReturnDetails"
          source="purchasereturndetail.id"
          reference="PurchaseReturnDetail"
        >
          <TextField source={PURCHASERETURNDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PurchaseReturns"
          source="purchasereturn.id"
          reference="PurchaseReturn"
        >
          <TextField source={PURCHASERETURN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Purchases"
          source="purchase.id"
          reference="Purchase"
        >
          <TextField source={PURCHASE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
