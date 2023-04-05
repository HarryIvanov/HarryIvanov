class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw Error ("Not enough space in the collection.")
        }
        this.books.push({bookName, bookAuthor, payed: false});
        this.capacity -= 1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook( bookName ) {
        let check = this.books.find(e => e.bookName == bookName);
        if (!check) {
            throw Error (`${bookName} is not in the collection.`)
        }
        if (check.payed) {
            throw Error (`${bookName} has already been paid.`)
        }
        check.payed = true;
        return `${bookName} has been successfully paid.`
    }   
    removeBook(bookName)  {
        let check = this.books.find(e => e.bookName == bookName);
        let index = this.books.findIndex(e => e.bookName == bookName);
        if (!check) {
            throw Error ("The book, you're looking for, is not found.")
        }
        if (!check.payed) {
            throw Error (`${bookName} need to be paid before removing from the collection.`)
        }
       
        this.books.splice(index, 1)
        return `${bookName} remove from the collection.`
    } 
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [];
            let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            for (const el of sorted) {
                let payed = ""
                if (el.payed) {
                    payed = "Has Paid"
                } else {
                    payed = "Not Paid"
                }
                result.push(`${el.bookName} == ${el.bookAuthor} - ${payed}.`)
            }
            result.unshift(`The book collection has ${this.capacity} empty spots left.`)
            return result.join('\n')  
        }
        let check = this.books.find(el => el.bookAuthor == bookAuthor);
        if (!check) {
            throw Error (`${bookAuthor} is not in the collection.`)
        }
        let payed = ""
        if (check.payed) {
            payed = "Has Paid"
        } else {
            payed = "Not Paid"
        }
        return `${check.bookName} == ${check.bookAuthor} - ${payed}.`
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




