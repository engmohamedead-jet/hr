import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { OrderStatusTitle } from "../orderStatus/OrderStatusTitle";
import { ProductTitle } from "../product/ProductTitle";
import { StoreTitle } from "../store/StoreTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const ProductionOrderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="billOfMaterialId.id"
          reference="BillOfMaterial"
          label="BillOfMaterialId"
        >
          <SelectInput optionText={BillOfMaterialTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="DeadlineDate" source="deadlineDate" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="FinishDate" source="finishDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="OrderDate" source="orderDate" />
        <ReferenceInput
          source="orderStatusId.id"
          reference="OrderStatus"
          label="OrderStatusId"
        >
          <SelectInput optionText={OrderStatusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="ProductQuantity" source="productQuantity" />
        <TextInput label="SequenceNumber" source="sequenceNumber" />
        <DateTimeInput label="StartDate" source="startDate" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="unit.id" reference="Unit" label="UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
