import { Decimal } from "decimal.js";
import { ContractStatusWhereUniqueInput } from "../contractStatus/ContractStatusWhereUniqueInput";
import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";

export type InstallationContractUpdateInput = {
  address?: string | null;
  amount?: Decimal;
  cabinetTechnician?: string | null;
  contractDate?: Date | null;
  contractNumber?: string;
  contractStatusId?: ContractStatusWhereUniqueInput;
  customerElevatorId?: CustomerElevatorWhereUniqueInput;
  doorTechnician?: string | null;
  electricityTechnician?: string | null;
  elevatorId?: ElevatorWhereUniqueInput;
  elevatorsCount?: string | null;
  phoneNumber?: string | null;
};
