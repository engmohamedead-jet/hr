import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveRequestTypeServiceBase } from "./base/leaveRequestType.service.base";

@Injectable()
export class LeaveRequestTypeService extends LeaveRequestTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
