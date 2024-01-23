import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { WalletModule } from './wallet/wallet.module';
import { StudentsModule } from './students/students.module';



@Module({
  imports: [
    
    StudentsModule
  ],
  controllers: [AppController, OrderController],
  providers: [AppService], //AppServices is dependecies of provider
})
export class AppModule {}
