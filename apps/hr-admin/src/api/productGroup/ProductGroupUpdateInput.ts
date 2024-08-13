import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProductGroupUpdateManyWithoutProductGroupsInput } from "./ProductGroupUpdateManyWithoutProductGroupsInput";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { ProductUpdateManyWithoutProductGroupsInput } from "./ProductUpdateManyWithoutProductGroupsInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";

export type ProductGroupUpdateInput = {
  PurchaseDiscountAccountId?: AccountWhereUniqueInput | null;
  SaleReturnAccountId?: AccountWhereUniqueInput | null;
  account?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  excludeFromPurchase?: boolean | null;
  excludeFromSale?: boolean | null;
  inventoryAccountId?: AccountWhereUniqueInput | null;
  isDefault?: boolean | null;
  name?: string;
  normalizedName?: string;
  notes?: string | null;
  parentProductGroupId?: ProductGroupUpdateManyWithoutProductGroupsInput;
  productGroups?: ProductGroupWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutProductGroupsInput;
  purchaseAccountId?: AccountWhereUniqueInput | null;
  purchaseReturnAccountId?: AccountWhereUniqueInput | null;
  saleAccountId?: AccountWhereUniqueInput | null;
  saleDiscountAccountId?: AccountWhereUniqueInput | null;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
};
