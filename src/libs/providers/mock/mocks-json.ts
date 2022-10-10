import {
	randomNumber
} from "@ip-library/common/utils";

const randomId = () => {
	return (`${Math.random().toString(36)}${Math.random().toString(36)}`).slice(2, 10);
}
const randomPrice = () => randomNumber(1, 2500);

const mocksJson = {
	cats: [{
		"name": "Somali",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/c6/Blue_Somali_kitten_age_3_months.jpg"],
		"price": randomPrice()
	}, {
		"name": "Japanese Bobtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/56/JapaneseBobtailBlueEyedMi-ke.JPG"],
		"price": randomPrice()
	}, {
		"name": "Donskoy",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/2/21/Cat_don_sphinx.JPG"],
		"price": randomPrice()
	}, {
		"name": "Burmilla",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e9/Male_Burmilla_cat.jpeg"],
		"price": randomPrice()
	}, {
		"name": "American Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/0/0c/American_Shorthair.jpg"],
		"price": randomPrice()
	}, {
		"name": "Norwegian Forest Cat",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Norskskogkatt_Evita_3.JPG"],
		"price": randomPrice()
	}, {
		"name": "Serrade Petit",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/c7/Serrade_petit.jpg"],
		"price": randomPrice()
	}, {
		"name": "Abyssinian",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg"],
		"price": randomPrice()
	}, {
		"name": "European Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/5d/European_shorthair_procumbent_Quincy.jpg"],
		"price": randomPrice()
	}, {
		"name": "Bombay",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Bombay_femelle.JPG"],
		"price": randomPrice()
	}, {
		"name": "Chantilly-Tiffany",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Tiffany3.jpg"],
		"price": randomPrice()
	}, {
		"name": "Snowshoe",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/4/4b/Snowshoe_%28cat%29.JPG"],
		"price": randomPrice()
	}, {
		"name": "Lykoi",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/1/1e/8-month-old_male_Lykoi.jpg"],
		"price": randomPrice()
	}, {
		"name": "Arabian Mau",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/53/3yoArabianMau.jpeg"],
		"price": randomPrice()
	}, {
		"name": "Sokoke",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/94/Sokoke_dalili.jpg"],
		"price": randomPrice()
	}, {
		"name": "Chausie",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/61/Chausiecatexample.jpg"],
		"price": randomPrice()
	}, {
		"name": "Egyptian Mau",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e1/Egy_mau.jpg"],
		"price": randomPrice()
	}, {
		"name": "Oriental Longhair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/65/OLH-GIP_Divan_Cesar.jpg"],
		"price": randomPrice()
	}, {
		"name": "Toyger",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/ca/Toyger_-_Cornish_Rex_presentation_show_Riihim%C3%A4ki_2008-11-16_IMG_0101.JPG"],
		"price": randomPrice()
	}, {
		"name": "Turkish Vankedisi",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/fb/Van_Cat_2_2015.JPG"],
		"price": randomPrice()
	}, {
		"name": "York Chocolate",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/2/26/York_Chocolate.jpg"],
		"price": randomPrice()
	}, {
		"name": "Serengeti",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/1/1a/Serengetimalecat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Turkish Angora",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/a1/Turkse_angora.jpg"],
		"price": randomPrice()
	}, {
		"name": "Pixie-bob",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/8c/Jarnac_Bepacific_feb07.jpg"],
		"price": randomPrice()
	}, {
		"name": "Aegean",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/51/Aegean_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Kurilian Bobtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/82/Kurilian_bobtail.JPG"],
		"price": randomPrice()
	}, {
		"name": "American Ringtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/a8/Chunky_Monkey_American_Ringtail_Cat_3rd_Generation.jpg"],
		"price": randomPrice()
	}, {
		"name": "Aphrodite Giant",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/f5/Aphrodite%27s_Giant.jpg"],
		"price": randomPrice()
	}, {
		"name": "Savannah",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/c4/Savannah_Cat_portrait.jpg"],
		"price": randomPrice()
	}, {
		"name": "American Curl",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/1/17/American_curl_2.jpg"],
		"price": randomPrice()
	}, {
		"name": "Russian Blue",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Russian_Blue_001.gif"],
		"price": randomPrice()
	}, {
		"name": "Foldex",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Cachorro_de_Gato_FoldEx_%28%22Belisario_del_Laberinto%22%29.JPG"],
		"price": randomPrice()
	}, {
		"name": "Scottish Fold",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/83/Lilac_Scottish_Fold.jpg"],
		"price": randomPrice()
	}, {
		"name": "Sphynx",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg"],
		"price": randomPrice()
	}, {
		"name": "Exotic Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/4/4f/Cream_tabby_exotic_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Ukrainian Levkoy",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/92/Ukrainian_Levkoy_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Bengal",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/d/df/Bengal_Cat_%28Fia%29.jpg"],
		"price": randomPrice()
	}, {
		"name": "British Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg"],
		"price": randomPrice()
	}, {
		"name": "Burmese",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/0/0c/Male_Chocolate_Burmese_Cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Korat",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/c1/Veda%2Cchat-adulte-m%C3%A2le-race-korat.JPG"],
		"price": randomPrice()
	}, {
		"name": "Ragamuffin",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/f3/20050922AmarilloRes.jpg"],
		"price": randomPrice()
	}, {
		"name": "Himalayan",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/d/dc/Chocolate_Himlayan.jpg"],
		"price": randomPrice()
	}, {
		"name": "Korean Bobtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Bobtail_walking.JPG"],
		"price": randomPrice()
	}, {
		"name": "Munchkin",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Longhairedmunchkin.jpg"],
		"price": randomPrice()
	}, {
		"name": "Selkirk Rex",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/en/c/c3/PolloSelkirkRex.jpg"],
		"price": randomPrice()
	}, {
		"name": "Cornish Rex",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Rex",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/b/b8/BebopsLilacPrince.JPG"],
		"price": randomPrice()
	}, {
		"name": "Dragon Li",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/c/c2/Dragon_Li_-_Li_Hua_Mau1.jpg"],
		"price": randomPrice()
	}, {
		"name": "Ojos Azules",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/4/42/Lazuli01.jpg"],
		"price": randomPrice()
	}, {
		"name": "Tonkinese",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/81/Tonkinese.gif"],
		"price": randomPrice()
	}, {
		"name": "Balinese",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e6/Oskar.jpg"],
		"price": randomPrice()
	}, {
		"name": "Khao Manee",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/98/Khao_Manee_%22ChaWee%22.jpg"],
		"price": randomPrice()
	}, {
		"name": "Brazilian Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/87/Gato_pelo_curto_brasileiro.JPG"],
		"price": randomPrice()
	}, {
		"name": "Oriental Bicolor",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/6a/Oriental_shorthair_20070130_caroline.jpg"],
		"price": randomPrice()
	}, {
		"name": "California Spangled",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Spangled_Cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "British Longhair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/50/British_Longhair_-_Black_Silver_Shaded.jpg"],
		"price": randomPrice()
	}, {
		"name": "Oriental Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/91/Oriental_Shorthair_Blue_Eyed_White_cat_%28juvenile%29.jpg"],
		"price": randomPrice()
	}, {
		"name": "Singapura",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/d/da/Raffles_singapura_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Cyprus",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/b/b9/CyprusShorthair.jpg"],
		"price": randomPrice()
	}, {
		"name": "Siberian",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/4/42/Siberiancat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Persian (traditional)",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/67/SnowyandHazy.jpg"],
		"price": randomPrice()
	}, {
		"name": "Ragdoll",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg"],
		"price": randomPrice()
	}, {
		"name": "American Bobtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/88/American_bobtail_2.jpg"],
		"price": randomPrice()
	}, {
		"name": "LaPerm",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Rex",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Laperm_LH_red_tabby.jpg"],
		"price": randomPrice()
	}, {
		"name": "American Wirehair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Rex",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/7/7f/American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG"],
		"price": randomPrice()
	}, {
		"name": "Turkish Van",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/1/11/Turkish_Van_Example2.jpg"],
		"price": randomPrice()
	}, {
		"name": "Thai Lilac, Thai Blue Point and Thai Lilac Point",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/4/45/Thai_Lilac.jpg"],
		"price": randomPrice()
	}, {
		"name": "Raas",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/3/31/Kucing_Busok_Jantan.jpg"],
		"price": randomPrice()
	}, {
		"name": "Cymric",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e4/Cymric_-_Norwegian_forest_cat_presentation_show_Kotka_2009-02-01_IMG_0687.JPG"],
		"price": randomPrice()
	}, {
		"name": "Mekong Bobtail",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/94/Mekong_bobtail_female%2C_Cofein_Pride_cattery.jpg"],
		"price": randomPrice()
	}, {
		"name": "Kinkalow",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/fa/Tinkerbella.jpg"],
		"price": randomPrice()
	}, {
		"name": "Suphalak",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/52/Suphalak_Female_in_Thailand_named_AumDaengManee.jpg"],
		"price": randomPrice()
	}, {
		"name": "Birman",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Birman2.jpg"],
		"price": randomPrice()
	}, {
		"name": "Devon Rex",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Rex",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/b/b0/Devon_Rex_Izzy.jpg"],
		"price": randomPrice()
	}, {
		"name": "Asian Semi-longhair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg"],
		"price": randomPrice()
	}, {
		"name": "Havana Brown",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/5d/Havana_Brown.jpg"],
		"price": randomPrice()
	}, {
		"name": "Minskin",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/7/73/Minskin_Kitten_Female_blue_tabby_color-pattern.jpg"],
		"price": randomPrice()
	}, {
		"name": "Ocicat",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/2/21/Ocicat-Charan.jpg"],
		"price": randomPrice()
	}, {
		"name": "Australian Mist",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/f0/Australian_Mist.jpg"],
		"price": randomPrice()
	}, {
		"name": "Persian (modern)",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg"],
		"price": randomPrice()
	}, {
		"name": "Nebelung",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/9/9e/Nebelung_Male%2C_Aleksandr_van_Song_de_Chine.JPG"],
		"price": randomPrice()
	}, {
		"name": "Highlander",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/1/15/Highlander-7.jpg"],
		"price": randomPrice()
	}, {
		"name": "Siamese",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"],
		"price": randomPrice()
	}, {
		"name": "Maine Coon",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Semi-long to long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/d/d0/Maine_Coon_female.jpg"],
		"price": randomPrice()
	}, {
		"name": "Asian",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/a/a1/BrownVarientAsianCat.JPG"],
		"price": randomPrice()
	}, {
		"name": "Minuet",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/54/White_Gray_Minuet_Cat.png"],
		"price": randomPrice()
	}, {
		"name": "Chartreux",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/7/7f/Abbaye_fev2006_003.jpg"],
		"price": randomPrice()
	}, {
		"name": "Javanese",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/6/6f/Javanese_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Peterbald",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Hairless, velour, brush, or straight coat",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/b/b7/Tamila_the_lilac_tabby_Peterbald_cat.jpg"],
		"price": randomPrice()
	}, {
		"name": "Manx",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short/Long",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/e/e3/Japanese_Bobtail_looking_like_Manx.jpg"],
		"price": randomPrice()
	}, {
		"name": "Colorpoint Shorthair",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/en/d/d5/Jake117.jpg"],
		"price": randomPrice()
	}, {
		"name": "Thai",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Short",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/5/57/Mimbi3.JPG"],
		"price": randomPrice()
	}, {
		"name": "German Rex",
		"id": randomId(),
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"coatType": "Rex",
		"imageUrls": ["https://upload.wikimedia.org/wikipedia/commons/f/ff/German_Rex_Emi.jpg"],
		"price": randomPrice()
	}],
};

export default mocksJson;
