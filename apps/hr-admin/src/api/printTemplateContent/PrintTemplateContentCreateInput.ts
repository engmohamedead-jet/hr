import { PrintTemplateWhereUniqueInput } from "../printTemplate/PrintTemplateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PrintTemplateContentCreateInput = {
  display?: string | null;
  fieldValue: string;
  isActive?: boolean | null;
  key: string;
  note?: string | null;
  printTemplateId?: PrintTemplateWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
  value: string;
};
