import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerElevatorServiceBase } from "./base/customerElevator.service.base";

@Injectable()
export class CustomerElevatorService extends CustomerElevatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
