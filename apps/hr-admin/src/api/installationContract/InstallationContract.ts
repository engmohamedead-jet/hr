import { Decimal } from "decimal.js";
import { ContractStatus } from "../contractStatus/ContractStatus";
import { CustomerElevator } from "../customerElevator/CustomerElevator";
import { Elevator } from "../elevator/Elevator";

export type InstallationContract = {
  address: string | null;
  amount: Decimal;
  cabinetTechnician: string | null;
  contractDate: Date | null;
  contractNumber: string;
  contractStatusId?: ContractStatus;
  createdAt: Date;
  customerElevatorId?: CustomerElevator;
  doorTechnician: string | null;
  electricityTechnician: string | null;
  elevatorId?: Elevator;
  elevatorsCount: string | null;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
