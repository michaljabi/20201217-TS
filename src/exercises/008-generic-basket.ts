/**
 *
 * Zadanie 8:
 *
 * Przygotuj klasę Basket - która będzie obsługiwała 2 rodzaje obiektów:
 * AuctionItem
 * oraz
 * BuyNowItem
 *
 * realizując następującą logikę implementacji:
 */

// Odkomentuj w momencie rozpoczęcia pracy nad zadaniem:
abstract class Item {
    public abstract name: string;
}

interface Named {
    name: string;
}

class BuyNowItem implements Named {
    constructor(public name: string) {}
}

class AuctionItem extends Item {
    constructor(public name: string) {
        super();
    }
}

class Basket<ITEM> {

    private items: ITEM[] = [];

    addItem(item: ITEM): void {
        this.items.push(item);
    }

    getAllItems(): readonly ITEM[] {
        return this.items;
    }
}

const myBuyNowBasket = new Basket<BuyNowItem>();
const myAuctionBasket = new Basket<AuctionItem>();

myBuyNowBasket.addItem(new BuyNowItem('Telewizor'));
myBuyNowBasket.addItem(new BuyNowItem('Wersalka'));

myAuctionBasket.addItem(new AuctionItem('Karta kolekcjonerska'));

// myBuyNowBasket.getAllItems().push(new BuyNowItem('Troll'));

myBuyNowBasket.getAllItems().forEach((item: BuyNowItem) => {
    console.log(item.name);
})

myAuctionBasket.getAllItems().forEach((item: AuctionItem) => {
    console.log(item.name);
})

;[12, 2, 2].forEach( () => {} )
;[12, 2, 2].push(80);

// Dodatkowe punkty jeśli ta operacja będzie niemożliwa w TS:



export {};
