import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProductGroupCreateNestedManyWithoutProductGroupsInput } from "./ProductGroupCreateNestedManyWithoutProductGroupsInput";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";

export type ProductGroupCreateInput = {
  PurchaseDiscountAccountId?: AccountWhereUniqueInput | null;
  SaleReturnAccountId?: AccountWhereUniqueInput | null;
  account?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  excludeFromPurchase?: boolean | null;
  excludeFromSale?: boolean | null;
  inventoryAccountId?: AccountWhereUniqueInput | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  notes?: string | null;
  parentProductGroupId?: ProductGroupCreateNestedManyWithoutProductGroupsInput;
  productGroups?: ProductGroupWhereUniqueInput | null;
  purchaseAccountId?: AccountWhereUniqueInput | null;
  purchaseReturnAccountId?: AccountWhereUniqueInput | null;
  saleAccountId?: AccountWhereUniqueInput | null;
  saleDiscountAccountId?: AccountWhereUniqueInput | null;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
};
