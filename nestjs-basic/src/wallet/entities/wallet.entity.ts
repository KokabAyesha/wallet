import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('wallet')
export class WalletEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    salary: number;

    @Column()
    isManager: boolean;
}
