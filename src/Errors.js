export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
export class ValidationError extends CustomError {}
export class RequiredError extends ValidationError {}
export class NetworkError extends CustomError {}