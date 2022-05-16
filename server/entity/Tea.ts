import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tea {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    brand!: string

    @Column()
    name!: string

    @Column()
    tags!: string

    @Column()
    image!: string

}
