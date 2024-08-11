import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElevatorStatusServiceBase } from "./base/elevatorStatus.service.base";

@Injectable()
export class ElevatorStatusService extends ElevatorStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
