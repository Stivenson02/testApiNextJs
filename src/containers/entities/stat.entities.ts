import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Container } from "./container.entities";
import { Budget } from "./budget.entities";


@Entity()
export class Stat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    dispatch: boolean;

    @ManyToOne(() => Container, (container) => container.stats)
    container: Container

    @ManyToOne(() => Budget, (budget) => budget.stats)
    budget: Budget


}