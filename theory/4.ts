// Enum (constants in TS)
enum Colors {
  RED,
  GREEN,
  BLUE
}

const primary: Colors = Colors.GREEN

enum Tokens {
  accessToken,
  refreshToken
}

const token: Tokens = Tokens.accessToken

// Assertions 
const someValue:any = 'sdsf3f';
const strLength:number = (someValue as string).length;

// Generic ?
function getCar<T extends string>(name:T): T {
  return name
}