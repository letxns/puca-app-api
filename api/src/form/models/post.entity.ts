import { IsNotEmpty } from 'class-validator';
// import { Length } from 'class-validator/types/decorator/decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('form_post')
export class FormPostEntity{

    @IsNotEmpty({
        message: "This field should not be empty."
    })

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    // @Length( 5, 15 )
    @Column()
    codproduto: number;

    @IsNotEmpty()
    // @Length( 1, 100 )
    @Column()
    descricao: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    incluidoEm: Date;
}