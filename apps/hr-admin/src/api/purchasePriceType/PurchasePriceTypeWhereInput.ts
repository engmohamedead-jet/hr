import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseDetailWhereUniqueInput } from "../purchaseDetail/PurchaseDetailWhereUniqueInput";
import { PurchaseReturnDetailWhereUniqueInput } from "../purchaseReturnDetail/PurchaseReturnDetailWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../purchaseReturn/PurchaseReturnWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchasePriceTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  purchaseDetails?: PurchaseDetailWhereUniqueInput;
  purchaseReturnDetails?: PurchaseReturnDetailWhereUniqueInput;
  purchaseReturns?: PurchaseReturnWhereUniqueInput;
  purchases?: PurchaseWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
