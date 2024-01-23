import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './wallet/entities/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { ExpenseModule } from './expense/expense.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ayesha',
      database: 'postgres',
      entities: [WalletEntity],
      synchronize: true,
    }),
    StudentsModule,
    WalletModule,
    ExpenseModule

  ],
  controllers: [AppController, OrderController],
  providers: [AppService], //AppServices is dependecies of provider
})
export class AppModule {}
