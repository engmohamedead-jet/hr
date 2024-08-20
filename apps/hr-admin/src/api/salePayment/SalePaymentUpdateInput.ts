import { Decimal } from "decimal.js";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { BankBranchWhereUniqueInput } from "../bankBranch/BankBranchWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePaymentUpdateInput = {
  LocalCurrencyRatl?: Decimal;
  bank?: BankWhereUniqueInput | null;
  bankBrach?: string;
  bankBranch?: BankBranchWhereUniqueInput | null;
  chequeNumber?: string | null;
  creditCardNumber?: string | null;
  currencyId?: CurrencyWhereUniqueInput | null;
  foreignCurrencyRate?: Decimal;
  isCheque?: boolean | null;
  note?: string | null;
  paidValue?: string | null;
  paymentDate?: Date;
  paymentMethodId?: PaymentMethodWhereUniqueInput;
  quantity?: number | null;
  saleId?: SaleWhereUniqueInput | null;
  seqeunce?: number;
  tenant?: TenantWhereUniqueInput | null;
};
