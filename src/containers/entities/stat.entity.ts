import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    budget_total: number;

    @Column()
    budget_dispatched: number;

    @Column()
    budget_no_dispatched: number;

}