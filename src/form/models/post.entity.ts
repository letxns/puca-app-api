import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('form_post')
export class FormPostEntity{

    @IsNotEmpty({
        message: "This field should not be empty."
    })

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    codproduto: number;

    @IsNotEmpty()
    @Column()
    descricao: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    incluidoEm: Date;
}