create table homes (
    id serial primary key,
    name VARCHAR(20),
    adddress VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip integer,
    img text,
    mortgage DECIMAL,
    rent DECIMAL
);
