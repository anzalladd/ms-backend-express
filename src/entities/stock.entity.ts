import { BaseEntity } from '@/helpers/utils/BaseEntity'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Product from './product.entity';

@Entity({ name: 'stock' })
class Stock extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public quantity!: number;

  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product
}

export default Stock
