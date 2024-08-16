import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { ProductGroupCreateNestedManyWithoutProductGroupsInput } from "./ProductGroupCreateNestedManyWithoutProductGroupsInput";
import { ProductCreateNestedManyWithoutProductGroupsInput } from "./ProductCreateNestedManyWithoutProductGroupsInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";

export type ProductGroupCreateInput = {
  code?: string | null;
  costOfGoodsSoldAccount?: AccountWhereUniqueInput | null;
  description?: string | null;
  excludeFromPurchase: boolean;
  excludeFromSale: boolean;
  inventoryAccount?: AccountWhereUniqueInput | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentProductGroupId?: ProductGroupWhereUniqueInput | null;
  productGroups?: ProductGroupCreateNestedManyWithoutProductGroupsInput;
  products?: ProductCreateNestedManyWithoutProductGroupsInput;
  purchaseAccountId?: AccountWhereUniqueInput | null;
  purchaseDiscountAccountId?: AccountWhereUniqueInput | null;
  purchaseReturnAccountId?: AccountWhereUniqueInput | null;
  saleAccountId?: AccountWhereUniqueInput | null;
  saleDiscountAccountId?: AccountWhereUniqueInput | null;
  saleReturnAccountId?: AccountWhereUniqueInput | null;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
};
