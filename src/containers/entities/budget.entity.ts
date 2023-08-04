import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Container } from "./container.entity";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    budget: number;

    @OneToMany(() => Container, (container) => container.budget)
    containers: Container[]

}