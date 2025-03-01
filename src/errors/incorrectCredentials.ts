export class IncorrectCredentials extends Error {
  constructor() {
    super('Incorrect credentials');
    this.name = 'IncorrectCredentials';
  }
}
