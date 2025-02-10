class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};


    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;

    }

    get(index) {
        return this.data[index];
    }

    pop() {

        delete this.data[this.length - 1];
        this.length--;
    }

    shift() {

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1];
        this.length--;

    }
    deleteByIndex(index) {



        if (index > this.length) {
            console.log("Index not allow")

        } else if (this.data[index]) {

            for (let i = index; i < this.length; i++) {
                this.data[i] = this.data[i + 1]
            }
            delete this.data[this.length - 1];
            this.length--;
        }
    }
}

const MyNewArray = new MyArray();
MyNewArray.push("apple");
MyNewArray.push("orange");
MyNewArray.push("banana");
console.log(MyNewArray)

// console.log(MyNewArray.get(0))
// MyNewArray.pop()
// console.log(MyNewArray)
// MyNewArray.shift()
// console.log(MyNewArray)

MyNewArray.deleteByIndex(0)

console.log(MyNewArray)