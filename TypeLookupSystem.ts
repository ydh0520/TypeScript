interface ITPerson {
    name: string;
    age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

const testperson: ITPerson = {
    age: 26,
    name: "Mark",
};

getProperty(testperson,'name');
