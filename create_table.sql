CREATE TABLE IF NOT EXISTS public.users
(
    id SERIAL NOT NULL,
    nick character varying(60) NOT NULL,
    email character varying(60),
    pass text COLLATE NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)