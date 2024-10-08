import { DecimalFilter } from "../../util/DecimalFilter";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BankBranchWhereUniqueInput } from "../bankBranch/BankBranchWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePaymentWhereInput = {
  LocalCurrencyRatl?: DecimalFilter;
  bank?: BankWhereUniqueInput;
  bankBrach?: StringFilter;
  bankBranch?: BankBranchWhereUniqueInput;
  chequeNumber?: StringNullableFilter;
  creditCardNumber?: StringNullableFilter;
  currencyId?: CurrencyWhereUniqueInput;
  foreignCurrencyRate?: DecimalFilter;
  id?: StringFilter;
  isCheque?: BooleanNullableFilter;
  note?: StringNullableFilter;
  paidValue?: StringNullableFilter;
  paymentDate?: DateTimeFilter;
  paymentMethodId?: PaymentMethodWhereUniqueInput;
  quantity?: IntNullableFilter;
  saleId?: SaleWhereUniqueInput;
  seqeunce?: IntFilter;
  tenant?: TenantWhereUniqueInput;
};
