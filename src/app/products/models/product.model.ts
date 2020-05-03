export interface IProduct
{
  name: string;
}

export class Product implements IProduct
{
  constructor(
    public name: string
  ) {
    this.name = name || null;
  }
}
