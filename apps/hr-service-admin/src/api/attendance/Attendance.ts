import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type Attendance = {
  ApprovedByUserId?: User | null;
  attendanceDate: Date;
  checkInTime: string | null;
  checkOutTime: string | null;
  createdAt: Date;
  employeeId?: Employee;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  note: string | null;
  overtimeHours: string | null;
  reasonForAbsenteeism: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  wasAbsent: string | null;
  wasPresent: string;
};
