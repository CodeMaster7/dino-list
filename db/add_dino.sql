insert into dino
    (name, weight, diet)
values
    ($1, $2, $3);
select *
from dino