import { Inject, Service } from 'typedi'
import { getRepository, Repository } from 'typeorm'
import { Logger } from 'winston'

@Service()
export default class StockService {
  stockRepository: Repository<Entities.Stock>

  constructor(
    @Inject('stockEntity')
    public stockEntity: Entities.Stock,
    @Inject('logger') public logger: Logger
  ) {
    this.stockRepository = getRepository(this.stockEntity)
  }

  public async getStockOfProduct(query: any): Promise<any> {
    let stock: any
    if (query.sortBy) {
      stock = this.stockRepository
        .createQueryBuilder('stock')
        .orderBy('stock.quantity', query.sortBy)
        .leftJoinAndSelect('stock.product', 'product')
        .getMany()
    } else {
      stock = this.stockRepository
        .createQueryBuilder('stock')
        .leftJoinAndSelect('stock.product', 'product')
        .getMany()
    }
    return stock
  }
}
