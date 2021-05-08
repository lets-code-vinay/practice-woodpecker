    CREATE TABLE ST_CLASS (
        CLASS BIGSERIAL PRIMARY KEY
    );
    CREATE TABLE PARENT(
        P_NO BIGSERIAL PRIMARY KEY
    );

CREATE TABLE STUDENT (

        STUDENT_ID BIGSERIAL PRIMARY KEY,
        STUDENT_NAME TEXT NOT NULL,
        STUDENT_AGE INTEGER NOT NULL,
        PARENT_NAME TEXT ,
        PARENT_PHONE_NUMBER INTEGER  ,
        STUDENT_ROLL_NO INTEGER DEFAULT 0,
        DOB DATE DEFAULT ('2000-1-1'),
        STUDENT_CLASS INTEGER,
        FOREIGN KEY (STUDENT_CLASS) REFERENCES ST_CLASS(CLASS),
        FOREIGN KEY (PARENT_PHONE_NUMBER) REFERENCES PARENT(P_NO)
);

-- DROP TABLE STUDENT;
-- DROP TABLE ST_CLASS;
-- DROP TABLE PARENT;