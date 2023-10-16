interface  BookPrice{
    "currency": string,
    "value": number,
    "displayValue": string
    }
export interface Book{
    
"ISBN":number,
"title":String,
"author": String,
"summary": String,
"image":String,
"price": BookPrice
}


export interface cartList{
    book:Book,
    quantity:number
}