import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElevatorServiceBase } from "./base/elevator.service.base";

@Injectable()
export class ElevatorService extends ElevatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
