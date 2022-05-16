DROP TABLE IF EXISTS tea;
CREATE TABLE IF NOT EXISTS tea
(
    id          INT             PRIMARY KEY,
    brand	    varchar(50)     NOT NULL,
    name	    varchar(50)     NOT NULL,
    tags    	varchar(50)     NOT NULL,
    image	    varchar(300)    NOT NULL
);

INSERT INTO tea (id,brand,name,tags,image)
VALUES
    (1, 'GEPA', 'Chiapas', 'Arabic', 'https://m.media-amazon.com/images/I/71x4OwofCEL._SX522_.jpg'),
    (2, 'GEPA', 'Bio Caffè Crema', 'Robusta', 'https://m.media-amazon.com/images/I/81bgP49RwkL._SY679_.jpg'),
    (3, 'GEPA', 'Ital. Bio Espresso', 'Arabic', 'https://www.edeka24.de/out/pictures/generated/product/1/540_540_90/gepa_fairtrade_italienischer_bio_espresso_ganze_bohnen.jpg'),
    (4, 'REWE feine Welt', 'Incahuasi Espresso', 'Robusta', 'https://www.rewe.de/_ts_01568795674905/.imaging/dim/480/835/50-50/dam/rewe-de/produkte-und-services/unsere-marken/rewe-feine-welt/Aenderungen-September19/1006333_INCAH-ESPR-BOHNE-FEINE-WELT_9725600.jpg'),
    (5, 'REWE feine Welt', 'Incahuasi Crema', 'Robusta', 'https://img.rewe-static.de/1006375/9725660_digital-image.png'),
    (6, 'Café Intención', 'Espresso Intensivo', 'Arabic', 'https://m.media-amazon.com/images/I/71xL2G--wPL._SY445_.jpg'),
    (7, 'Eilles Kaffee', 'Caffè Crema', 'Robusta', 'https://www.eilles.de/media/catalog/product/e/i/eilles_cafevrema.jpg'),
    (8, 'Segafredo', 'Caffè Crema', 'Arabic', 'https://cdn.expert.de/f5/a5/4e/f69a7989da1fff58f305d73517f6859331/Abbildung_1073029.jpeg_1000x1000_90-0.jpeg');
