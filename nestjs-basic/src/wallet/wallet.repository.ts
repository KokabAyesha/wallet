import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { WalletEntity } from "./entities/wallet.entity";
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletRepository extends Repository<WalletEntity> {
  constructor(private dataSource: DataSource) {
    super(WalletEntity, dataSource.createEntityManager());
  }
  async createWallet(createWalletDto:CreateWalletDto) {
    try{
      return this.save(createWalletDto);
    } catch (error){
      throw error;
    } 
  }
  async findAll() {
    try{
      return this.find();
    } catch (error){
      throw error;
    } 
  }
  async findById(id: number) {
    try{
      return this.findOne({
        where: {
          id,
        },
      });
    } catch (error){
      throw error;
    } 
  }
  async updateWallet(id: number, UpdateWalletDto:UpdateWalletDto) {
    try{
      const wallet = await this.findById(id);
      const updateWallet = {...wallet,...UpdateWalletDto};
      console.log(wallet);
      return this.save(UpdateWalletDto);
    } catch (error){
      throw error;
    } 
  }
  async removeWallet(id: number) {
    try{
      const wallet = await this.findById(id);
      // return this.remove(wallet);
      return this.delete({id});
    } catch (error){
      throw error;
    } 
  }

 
}