import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElevatorSparePartServiceBase } from "./base/elevatorSparePart.service.base";

@Injectable()
export class ElevatorSparePartService extends ElevatorSparePartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
