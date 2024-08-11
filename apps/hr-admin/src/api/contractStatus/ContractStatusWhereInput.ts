import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallationContractWhereUniqueInput } from "../installationContract/InstallationContractWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ContractStatusWhereInput = {
  Codec?: StringNullableFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  installationContracts?: InstallationContractWhereUniqueInput;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
};
