import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ProductGroupTitle } from "../productGroup/ProductGroupTitle";
import { StoreTitle } from "../store/StoreTitle";
import { UnitTitle } from "../unit/UnitTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductDepartmentTitle } from "../productDepartment/ProductDepartmentTitle";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ProductGroupId.id"
          reference="ProductGroup"
          label="ProductGroupId"
        >
          <SelectInput optionText={ProductGroupTitle} />
        </ReferenceInput>
        <TextInput label="Barcode" source="barcode" />
        <BooleanInput label="CanExpire" source="canExpire" />
        <TextInput label="Code" source="code" />
        <NumberInput label="CostPrice" source="costPrice" />
        <BooleanInput
          label="CostPriceIncludesTax"
          source="costPriceIncludesTax"
        />
        <NumberInput
          label="CurrentStockQuantity"
          source="currentStockQuantity"
        />
        <NumberInput label="DaysToManufacture" source="daysToManufacture" />
        <ReferenceInput
          source="defaultStoreId.id"
          reference="Store"
          label="DefaultStoreId"
        >
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="defaultUnitId.id"
          reference="Unit"
          label="DefaultUnitId"
        >
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="DiscontinuedDate" source="discontinuedDate" />
        <NumberInput label="DiscountRate" source="discountRate" />
        <NumberInput
          step={1}
          label="ExpireAlarmInDays"
          source="expireAlarmInDays"
        />
        <NumberInput
          step={1}
          label="ExpireIsDefaultAfterDaysFromPurchase"
          source="expireIsDefaultAfterDaysFromPurchase"
        />
        <NumberInput label="FirstStockQuantity" source="firstStockQuantity" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCompound" source="isCompound" />
        <BooleanInput label="IsFavorite" source="isFavorite" />
        <BooleanInput label="MaintainInventory" source="maintainInventory" />
        <NumberInput label="MinimumSalePrice" source="minimumSalePrice" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <div />
        <ReferenceInput
          source="productCategoryId.id"
          reference="ProductCategory"
          label="ProductCategoryId"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productDepartmentId.id"
          reference="ProductDepartment"
          label="ProductDepartmentId"
        >
          <SelectInput optionText={ProductDepartmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productTypeId.id"
          reference="ProductType"
          label="ProductTypeId"
        >
          <SelectInput optionText={ProductTypeTitle} />
        </ReferenceInput>
        <NumberInput label="ProfitRate" source="profitRate" />
        <NumberInput label="ReorderQuantity" source="reorderQuantity" />
        <NumberInput label="SalePrice" source="salePrice" />
        <BooleanInput
          label="SalePriceIncludesTax"
          source="salePriceIncludesTax"
        />
        <ReferenceInput
          source="saleTaxId.id"
          reference="SaleTax"
          label="SaleTaxId"
        >
          <SelectInput optionText={SaleTaxTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
