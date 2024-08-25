import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { RedisModule } from "./redis/redis.module";
import { EmployeeDepartmentModule } from "./employeeDepartment/employeeDepartment.module";
import { EmployeeModule } from "./employee/employee.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { JobTitleModule } from "./jobTitle/jobTitle.module";
import { TenantUserModule } from "./tenantUser/tenantUser.module";
import { TenantModule } from "./tenant/tenant.module";
import { UserModule } from "./user/user.module";
import { EmployeeRoleModule } from "./employeeRole/employeeRole.module";
import { EmployeeGroupModule } from "./employeeGroup/employeeGroup.module";
import { BonusRequestModule } from "./bonusRequest/bonusRequest.module";
import { MachineModule } from "./machine/machine.module";
import { CheckInOutModule } from "./checkInOut/checkInOut.module";
import { DailyMovementRequestModule } from "./dailyMovementRequest/dailyMovementRequest.module";
import { DayOffRequestModule } from "./dayOffRequest/dayOffRequest.module";
import { LeaveRequestModule } from "./leaveRequest/leaveRequest.module";
import { LeaveRequestTypeModule } from "./leaveRequestType/leaveRequestType.module";
import { OverNightRequestModule } from "./overNightRequest/overNightRequest.module";
import { FiscalMonthModule } from "./fiscalMonth/fiscalMonth.module";
import { TradingSummaryModule } from "./tradingSummary/tradingSummary.module";
import { WorkCenterModule } from "./workCenter/workCenter.module";
import { WorkCenterAlternativeModule } from "./workCenterAlternative/workCenterAlternative.module";
import { WorkCenterCapacityModule } from "./workCenterCapacity/workCenterCapacity.module";
import { WorkCenterProductivityModule } from "./workCenterProductivity/workCenterProductivity.module";
import { WorkCenterProductivityLossModule } from "./workCenterProductivityLoss/workCenterProductivityLoss.module";
import { WorkCenterProductivityLossTypeModule } from "./workCenterProductivityLossType/workCenterProductivityLossType.module";
import { WorkCenterRoutingModule } from "./workCenterRouting/workCenterRouting.module";
import { WorkCenterTagModule } from "./workCenterTag/workCenterTag.module";
import { WorkCenterWorkCenterTagModule } from "./workCenterWorkCenterTag/workCenterWorkCenterTag.module";
import { WorkSheetTypeModule } from "./workSheetType/workSheetType.module";
import { WorkOrderStatusModule } from "./workOrderStatus/workOrderStatus.module";
import { WorkOrderModule } from "./workOrder/workOrder.module";
import { ScrapReasonModule } from "./scrapReason/scrapReason.module";
import { WorkOrderRoutingModule } from "./workOrderRouting/workOrderRouting.module";
import { WorkOrderDependencyModule } from "./workOrderDependency/workOrderDependency.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    EmployeeDepartmentModule,
    EmployeeModule,
    AttendanceModule,
    JobTitleModule,
    TenantUserModule,
    TenantModule,
    UserModule,
    EmployeeRoleModule,
    EmployeeGroupModule,
    BonusRequestModule,
    MachineModule,
    CheckInOutModule,
    DailyMovementRequestModule,
    DayOffRequestModule,
    LeaveRequestModule,
    LeaveRequestTypeModule,
    OverNightRequestModule,
    FiscalMonthModule,
    TradingSummaryModule,
    WorkCenterModule,
    WorkCenterAlternativeModule,
    WorkCenterCapacityModule,
    WorkCenterProductivityModule,
    WorkCenterProductivityLossModule,
    WorkCenterProductivityLossTypeModule,
    WorkCenterRoutingModule,
    WorkCenterTagModule,
    WorkCenterWorkCenterTagModule,
    WorkSheetTypeModule,
    WorkOrderStatusModule,
    WorkOrderModule,
    ScrapReasonModule,
    WorkOrderRoutingModule,
    WorkOrderDependencyModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
