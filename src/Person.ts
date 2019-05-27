class Person {
    public Name: string;
    public Age: number;
    public City: string;

    constructor(name: string, age: number, city: string) {
        this.Name = name;
        this.Age = age;
        this.City = city;
    }
}

let singer = new Person("Elvis Presley", 42, "Memphis");
console.log(singer.Name);
