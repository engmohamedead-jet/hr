import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ContractStatusWhereUniqueInput } from "../contractStatus/ContractStatusWhereUniqueInput";
import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";

export type InstallationContractWhereInput = {
  address?: StringNullableFilter;
  amount?: DecimalFilter;
  cabinetTechnician?: StringNullableFilter;
  contractDate?: DateTimeNullableFilter;
  contractNumber?: StringFilter;
  contractStatusId?: ContractStatusWhereUniqueInput;
  customerElevatorId?: CustomerElevatorWhereUniqueInput;
  doorTechnician?: StringNullableFilter;
  electricityTechnician?: StringNullableFilter;
  elevatorId?: ElevatorWhereUniqueInput;
  elevatorsCount?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
