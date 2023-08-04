import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Container } from "./container.entities";
import { Budget } from "./budget.entities";


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