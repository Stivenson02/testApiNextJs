import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Container } from "./container.entities";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    budget: number;

    @OneToMany(() => Container, (container) => container.budget)
    containers: Container[]

}