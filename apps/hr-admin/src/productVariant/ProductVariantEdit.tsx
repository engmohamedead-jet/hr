import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AttributeValueTitle } from "../attributeValue/AttributeValueTitle";
import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { ProductBarcodeTitle } from "../productBarcode/ProductBarcodeTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductVariantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attributeValueId.id"
          reference="AttributeValue"
          label="AttributeValueId"
        >
          <SelectInput optionText={AttributeValueTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="billOfMaterialDetails"
          reference="BillOfMaterialDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="billOfMaterials"
          reference="BillOfMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="productBarcodes"
          reference="ProductBarcode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductBarcodeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
