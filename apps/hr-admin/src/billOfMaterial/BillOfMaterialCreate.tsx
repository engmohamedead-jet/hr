import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { BillOfMaterialTypeTitle } from "../billOfMaterialType/BillOfMaterialTypeTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const BillOfMaterialCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="billOfMaterialDetails"
          reference="BillOfMaterialDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="billOfMaterialTypeId.id"
          reference="BillOfMaterialType"
          label="BillOfMaterialTypeId"
        >
          <SelectInput optionText={BillOfMaterialTypeTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <NumberInput
          step={1}
          label="DaysToPrepareManufacturingOrder"
          source="daysToPrepareManufacturingOrder"
        />
        <DateTimeInput label="EndDate" source="endDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantId.id"
          reference="ProductVariant"
          label="ProductVariantId"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Quantity" source="quantity" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <DateTimeInput label="StartDate" source="startDate" />
        <ReferenceInput source="unitId.id" reference="Unit" label="UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
