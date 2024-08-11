import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElevatorTypeServiceBase } from "./base/elevatorType.service.base";

@Injectable()
export class ElevatorTypeService extends ElevatorTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
