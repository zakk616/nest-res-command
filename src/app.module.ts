import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermisionModule } from './permision/permision.module';
import { DepartmentModule } from './department/department.module';
import { DeptSectionModule } from './dept-section/dept-section.module';
import { TimeTableModule } from './time-table/time-table.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderModule } from './order/order.module';
import { BillModule } from './bill/bill.module';

@Module({
  imports: [UserModule, RoleModule, PermisionModule, DepartmentModule, DeptSectionModule, TimeTableModule, CustomerModule, SupplierModule, OrderModule, BillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
