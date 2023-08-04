import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Budget } from "./budget.entities";
import { Stat } from "./stat.entities";

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

    @ManyToOne(() => Budget, (budget) => budget.containers)
    budget: Budget

    @OneToMany(() => Stat, (stat) => stat.container)
    stats : Stat[]

}