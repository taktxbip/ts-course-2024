// func
function getAge(name?:string):number {
  return 35;
}

getAge();

const getAge2= (name?:string):number => 35;

// rest
function getFullName(firstName:string, ...names:string[]) {
  return `${firstName} ${names.join(' ')}`;
}

/* function overloading */
function getInfo(name: string): string;
function getInfo(age: number) : number;
function getInfo(single: boolean): boolean;

function getInfo(value: any): any {
    return value;
}

const result = getInfo('234')
const result = getInfo (234)