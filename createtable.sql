CREATE TABLE stat (
    id serial PRIMARY KEY, 
    budget_total INT NOT NULL, 
    budget_dispatched INT NOT NULL, 
    budget_no_dispatched INT NOT NULL
    );