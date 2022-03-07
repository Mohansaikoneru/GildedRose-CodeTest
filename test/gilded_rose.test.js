const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("testing a non-special item with initial quality of 0", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  });

  it("testing a non-special item with initial quality of 5 and sellIn of 1", function() {
    const gildedRose = new Shop([new Item("foo", 1, 5)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(4);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(2);
  });

  it("testing a non-special item with initial quality of 5 and sellIn of 0", function() {
    const gildedRose = new Shop([new Item("foo", 0, 5)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(3);
    items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(1);
  });

  it("testing a Aged Brie item with initial quality of 48 and sellIn of 10", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 48)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(49);

    // Aged Brie actually increases in Quality the older it gets
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(8);
    expect(items[0].quality).toEqual(50);
    
    // The Quality of an item is never more than 50
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(7);
    expect(items[0].quality).toEqual(50);
  });

  it("testing a Sulfuras, Hand of Ragnaros item with initial quality of 80 and sellIn of -1", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(80);

    // Sulfuras, being a legendary item, never has to be sold or decreases in Quality
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(80);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(80);
  });

  it("testing a Backstage passes to a TAFKAL80ETC concert item with initial quality of 45 and sellIn of 15", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(14);
    expect(items[0].quality).toEqual(46);
  });

  it("testing a Backstage passes to a TAFKAL80ETC concert item with initial quality of 48 and sellIn of 8", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 48)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(7);
    expect(items[0].quality).toEqual(50);
  });

  it("testing a Backstage passes to a TAFKAL80ETC concert item with initial quality of 47 and sellIn of 4", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 47)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(3);
    expect(items[0].quality).toEqual(50);
  });

  it("testing a Backstage passes to a TAFKAL80ETC concert item with initial quality of 40 and sellIn of 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("testing a Conjured Mana Cake item with initial quality of 10 and sellIn of 3", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(8);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(6);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(4);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  });
});
