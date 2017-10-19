/**
 * The default definition of a book
 * 
 * @export
 * @class BookModel
 */
export default interface BookModel {
    id:string;
    title:string;
    authors:string[];
    isbn:string;
    imageUrl:string;
}
