import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @Column({ default: true })
    isActive: boolean;
}
