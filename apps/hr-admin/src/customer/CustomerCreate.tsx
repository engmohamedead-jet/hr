import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
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
import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="DefaultSalePriceTypeId"
          source="DefaultSalePriceTypeId"
        />
        <TextInput label="Address" source="address" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Credit" source="credit" />
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
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
        <ReferenceArrayInput
          source="saleOrders"
          reference="SaleOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleReturns"
          reference="SaleReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sales"
          reference="Sale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTitle} />
        </ReferenceArrayInput>
        <TextInput label="SupplierId" source="supplierId" />
        <ReferenceArrayInput
          source="suppliers"
          reference="Supplier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplierTitle} />
        </ReferenceArrayInput>
        <TextInput label="TaxNumber" source="taxNumber" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="TenantId">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Create>
  );
};
