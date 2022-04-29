DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    time TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);

DROP TABLE IF EXISTS cut_styles CASCADE;

CREATE TABLE cut_styles (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);

DROP TABLE IF EXISTS knives CASCADE;

CREATE TABLE knives (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);

DROP TABLE IF EXISTS pots_pans CASCADE;

CREATE TABLE pots_pans (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);

DROP TABLE IF EXISTS cooking_styles CASCADE;

CREATE TABLE cooking_styles (
     id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);
