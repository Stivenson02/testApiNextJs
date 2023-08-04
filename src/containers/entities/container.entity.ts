import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Budget } from "./budget.entity";

@Entity()
export class Container {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    transport_cost: number;

    @Column()
    amount: number;

    @Column()
    total: number;

    @ManyToOne(() => Budget, (budget) => budget.containers)
    budget: Budget

}