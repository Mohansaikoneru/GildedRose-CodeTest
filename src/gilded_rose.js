class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (let item of this.items) {
            if (item.name == "Aged Brie") {
                item.sellIn -= 1;
                item.quality = Math.min(
                    50,
                    item.sellIn >= 0 ? item.quality + 1 : item.quality + 2
                );
            } else if (
                item.name == "Backstage passes to a TAFKAL80ETC concert"
            ) {
                item.sellIn -= 1;
                item.quality = this.getBackstageQuality(
                    item.sellIn,
                    item.quality
                );
            } else if (item.name == "Sulfuras, Hand of Ragnaros") {
                // Do Nothing for this item.
            } else if (item.name == "Conjured Mana Cake") {
                item.sellIn -= 1;
                item.quality = Math.max(
                    0,
                    item.sellIn >= 0 ? item.quality - 2 : item.quality - 4
                );
            } else {
                item.sellIn -= 1;
                item.quality = Math.max(
                    0,
                    item.sellIn >= 0 ? item.quality - 1 : item.quality - 2
                );
            }
        }

        return this.items;
    }

    getBackstageQuality = (sellIn, quality) => {
        let newQuality;
        if (sellIn < 0) {
            newQuality = 0;
        } else if (sellIn < 5) {
            newQuality = quality + 3;
        } else if (sellIn < 10) {
            newQuality = quality + 2;
        } else {
            newQuality = quality + 1;
        }

        return Math.min(50, newQuality);
    };
}

module.exports = {
    Item,
    Shop,
};
