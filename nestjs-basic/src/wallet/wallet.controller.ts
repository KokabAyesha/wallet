import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    const wallet = await this.walletService.create(createWalletDto);
    return { success:true,data: wallet, };
  }

  @Get()
  async findAll() {
    try{
      const wallet = await this.walletService.findAll();
      return { success:true,data: wallet };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find wallet'};
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try{
      const wallet = await this.walletService.findOne(id);
      return { success:true,data: wallet };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find wallet data.'};
    }
    
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateWalletDto: UpdateWalletDto) {
      try{
        const wallet = await this.walletService.update(id, updateWalletDto);
        return { success:true,data: wallet };
      } catch (error){
        console.log(error);
        return {success:false,message:'unabel to update wallet.'};
      }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    
    try{
      const wallet = await this.walletService.remove(id);
      return { success:true, 
        message: 'Wallet with id ${id} has been deleted successfully' };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to update wallet.'};
    }
  }
}
