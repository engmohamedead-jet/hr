import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";
import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";

export const BillOfMaterialDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="billOfMaterial.id"
          reference="BillOfMaterial"
          label="BillOfMaterial"
        >
          <SelectInput optionText={BillOfMaterialTitle} />
        </ReferenceInput>
        <NumberInput label="CostShare" source="costShare" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput
          label="IsManualConsumption"
          source="isManualConsumption"
        />
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
        <NumberInput label="Quantity" source="quantity" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="unitId.id" reference="Unit" label="UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workCenterRoutingId.id"
          reference="WorkCenterRouting"
          label="WorkCenterRoutingId"
        >
          <SelectInput optionText={WorkCenterRoutingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
