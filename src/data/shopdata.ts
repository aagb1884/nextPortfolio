type shopItem = {
  name: string;
  desc: string;
  format: string;
  url: string;
  price: string;
  img: string;
};

export const shopData: shopItem[] = [
  {
    name: "polblar Tmolkop",
    desc: "In a series of experimental, ludic poems I take you through a series of conversations between the actor and writer Kevin James, and an ambiguous disembodied entity called Polblar.",
    format: "Pamphlet",
    url: "https://thebraag.co/product/polblar-tmolkop/",
    price: "£7.50",
    img: "https://cdn.sanity.io/images/mx8z6kjw/production/a8b385c55164e179a559328d0a5cb5eda5392801-1409x2000.jpg",
  },
  {
    name: "The R-Pattz Facttz 2020",
    desc: "Originally published by Speculative Books (RIP) in 2020, this pamphlet contains multiple Robert Pattinsons and a line about Mark E. Smith where I can't remember what it means.",
    format: "Pamphlet",
    url: "https://andrewblair.bigcartel.com/product/the-r-pattz-facttz-2020",
    price: "£5 + P&P",
    img: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kezymnzmr2oljdbf7epobzlk/bafkreifjncnyqvf5ljndiebbbbz4ogo2iki67wnamt243qgfglie76n5lq",
  },
  {
    name: "The R-Pattz Facttz 2020",
    desc: "A pdf edition of the above, for people who hate paper and fear postage, or who like reading poetry on the sly.",
    format: "ebook",
    url: "https://ko-fi.com/s/096171bd41",
    price: "£4*",
    img: "https://storage.ko-fi.com/cdn/useruploads/display/5423eb3d-ef66-4843-a297-087f1a86e164_front-cover.png",
  },
  {
    name: "An Intense Young Man at an Open Mic Night",
    desc: "A full collection, published in 2017 and available in PDF format, from the former Godfather of Edinburgh Poetry.",
    format: "ebook",
    url: "https://ko-fi.com/s/582ed13a4b",
    price: "Free*",
    img: "https://storage.ko-fi.com/cdn/useruploads/display/d0ddcb81-8fb0-4b16-bc19-82d90b7465f6_cover.png",
  },
];
