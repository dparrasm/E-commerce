export class Price {
  private readonly amount: number;
  private readonly currency: string;

  constructor(amount: number, currency: string = "EUR") {
    this.validateAmount(amount);
    this.validateCurrency(currency);

    this.amount = this.normalizeAmount(amount);
    this.currency = currency.toUpperCase();
  }

  private validateAmount(amount: number): void {
    if (isNaN(amount) || amount < 0) {
      throw new Error("Price amount must be a non-negative number");
    }
  }

  private validateCurrency(currency: string): void {
    if (!currency || currency.trim().length !== 3) {
      throw new Error("Currency must be a valid 3-letter ISO code");
    }
  }

  private normalizeAmount(amount: number): number {
    // Ensure two decimal places
    return Math.round(amount * 100) / 100;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public toString(): string {
    return `${this.amount.toFixed(2)} ${this.currency}`;
  }

  public equals(other: Price): boolean {
    if (!(other instanceof Price)) return false;
    return this.amount === other.amount && this.currency === other.currency;
  }

  public add(other: Price): Price {
    if (other.currency !== this.currency) {
      throw new Error("Cannot add prices with different currencies");
    }
    return new Price(this.amount + other.amount, this.currency);
  }
}
