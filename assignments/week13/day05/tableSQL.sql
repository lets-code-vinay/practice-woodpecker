CREATE TABLE songs(
    songId BIGSERIAL PRIMARY KEY
    songName VARCHAR,
    songLength BIGINT,
    songAwards TEXT,
    songMovieName TEXT,
    songGenre TEXT,
    songLanguage TEXT,
    songRelease BIGINT,
    singerId BIGINT,
    FOREIGN KEY(singerId) REFERENCES singers(singerId)
)

CREATE TABLE singers(
    singerId BIGSERIAL PRIMARY KEY
    singerName VARCHAR,
    singerAge BIGINT,
    singerAwards TEXT,
    singerExpierience BIGINT,
    singerClassicallyTrained BOOLEAN,
    singerGender TEXT,
    singerNativeLanguage TEXT,
    songId BIGSERIAL,
    FOREIGN KEY(songId) REFERENCES songs(songId)
)