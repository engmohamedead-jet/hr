import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";
import { SaleQuotationDetailTitle } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { SaleReturnDetailTitle } from "../saleReturnDetail/SaleReturnDetailTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SalePriceTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="saleDetails.id"
          reference="SaleDetail"
          label="SaleDetails"
        >
          <SelectInput optionText={SaleDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleQuotationDetails.id"
          reference="SaleQuotationDetail"
          label="SaleQuotationDetails"
        >
          <SelectInput optionText={SaleQuotationDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleReturnDetails.id"
          reference="SaleReturnDetail"
          label="SaleReturnDetails"
        >
          <SelectInput optionText={SaleReturnDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleReturns.id"
          reference="SaleReturn"
          label="SaleReturns"
        >
          <SelectInput optionText={SaleReturnTitle} />
        </ReferenceInput>
        <ReferenceInput source="sales.id" reference="Sale" label="Sales">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
