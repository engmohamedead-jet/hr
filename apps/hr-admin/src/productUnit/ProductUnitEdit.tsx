import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";
import { ProductTitle } from "../product/ProductTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ProductUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
        <ReferenceInput
          source="compareUnitId.id"
          reference="Unit"
          label="CompareUnitId"
        >
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <NumberInput label="CompareUnitQuantity" source="compareUnitQuantity" />
        <NumberInput label="CostPrice" source="costPrice" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput
          label="IsCostPriceIncludingTax"
          source="isCostPriceIncludingTax"
        />
        <BooleanInput
          label="IsDefaultForPurchase"
          source="isDefaultForPurchase"
        />
        <BooleanInput label="IsDefaultForSale" source="isDefaultForSale" />
        <BooleanInput
          label="IsSalePriceIncludingTax"
          source="isSalePriceIncludingTax"
        />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
        <NumberInput label="SalePrice" source="salePrice" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="unitId.id" reference="Unit" label=" UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
