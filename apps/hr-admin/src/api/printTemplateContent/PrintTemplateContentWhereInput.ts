import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PrintTemplateWhereUniqueInput } from "../printTemplate/PrintTemplateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PrintTemplateContentWhereInput = {
  display?: StringNullableFilter;
  fieldValue?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  key?: StringFilter;
  note?: StringNullableFilter;
  printTemplateId?: PrintTemplateWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
  value?: StringFilter;
};
