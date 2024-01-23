import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
  createWallet: any;
  updateWallet: any;
  removeWallet: any;
  removeWalletDto: any;
  constructor(private readonly walletReposistry: WalletRepository) {}
  
  async create(createWalletDto: CreateWalletDto) {
    return this.walletReposistry.createWallet(createWalletDto);
  }
 
  async findAll() {
    return this.walletReposistry.findAll();
  }

  async findOne(id: number) {
    return this.walletReposistry.findById(id);
  }

  async update(id: number, updateWalletDto: UpdateWalletDto) {
    return this.walletReposistry,this.updateWallet(id,updateWalletDto);  }

  async remove(id: number) {
    return this.walletReposistry,this.removeWallet(id);
  }
}
