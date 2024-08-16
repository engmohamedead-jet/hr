import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BarcodeTypeTitle } from "../barcodeType/BarcodeTypeTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

export const ProductBarcodeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
        <ReferenceInput
          source="barcodeTypeId.id"
          reference="BarcodeType"
          label="BarcodeTypeId"
        >
          <SelectInput optionText={BarcodeTypeTitle} />
        </ReferenceInput>
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
      </SimpleForm>
    </Create>
  );
};
