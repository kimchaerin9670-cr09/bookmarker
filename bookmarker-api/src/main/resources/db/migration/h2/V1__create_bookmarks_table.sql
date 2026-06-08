CREATE SEQUENCE bm_id_seq START WITH 1 INCREMENT BY 50;

CREATE TABLE bookmarks (
	id bigint DEFAULT nextval('bm_id_seq') NOT NULL,
	title varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	created_at timestamp(6) WITH time ZONE,
	primary KEY (id)
);

ALTER TABLE bookmarks ADD COLUMN delflag CHAR(1) DEFAULT 'N';