CREATE DATABASE IF NOT EXISTS Agendamiento;
USE Agendamiento;

-- Tabla practicantes
create table practicantes (
    id_practicante int primary key auto_increment,
    tipo_documento varchar(10),
    numero_documento int,
    nombre varchar(50),
    genero varchar(10),
    estrato int,
    barrio varchar(50),
    localidad varchar(50),
    periodo int,
    jornada varchar(10),
    año_matricula int
);

-- Tabla profesionales
CREATE TABLE profesionales (
    id_profesional INT PRIMARY KEY AUTO_INCREMENT,
    tipo_documento VARCHAR(10),
    numero_documento INT,
    nombre VARCHAR(50),
    genero VARCHAR(10),
    estrato INT,
    barrio VARCHAR(50),
    localidad VARCHAR(50)
);

-- Tabla pacientes
CREATE TABLE pacientes (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    tipo_documento VARCHAR(10),
    numero_documento INT,
    nombre VARCHAR(50),
    genero VARCHAR(10),
    estrato INT,
    barrio VARCHAR(50),
    localidad VARCHAR(50),
    escolaridad VARCHAR(20),
    id_practicante_fk INT NULL,
    id_profesional_fk INT NULL,
    FOREIGN KEY (id_practicante_fk) REFERENCES practicantes(id_practicante),
    FOREIGN KEY (id_profesional_fk) REFERENCES profesionales(id_profesional),
    CHECK (
        (id_practicante_fk IS NOT NULL AND id_profesional_fk IS NULL) OR 
        (id_practicante_fk IS NULL AND id_profesional_fk IS NOT NULL)
    )
);


-- Tabla citas
CREATE TABLE citas (
    id_cita INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    hora TIME,
    lugar VARCHAR(50),
    id_paciente_fk INT,
    id_profesional_fk INT NULL,
    id_practicante_fk INT NULL,
    FOREIGN KEY (id_paciente_fk) REFERENCES pacientes(id_paciente),
    FOREIGN KEY (id_profesional_fk) REFERENCES profesionales(id_profesional),
    FOREIGN KEY (id_practicante_fk) REFERENCES practicantes(id_practicante),
    CHECK (
        (id_profesional_fk IS NOT NULL AND id_practicante_fk IS NULL) OR 
        (id_profesional_fk IS NULL AND id_practicante_fk IS NOT NULL)
    )
);


-- Tabla historial_Clinico
create table historial_Clinico (
    id_historial_clinico int primary key auto_increment, 
    motivo_consulta varchar(100),
    remitido varchar(100),
    estado_proceso varchar(50),
    diagnostico varchar(200),
    id_paciente_fk int,
    foreign key (id_paciente_fk) references pacientes(id_paciente)
);

-- Tabla calendario
create table calendario (
    id_calendario int primary key auto_increment,
    disponibilidad_practicante datetime,
    fecha date,
    hora time,
    lugar_cita varchar(50),
    id_paciente_fk int,
    foreign key (id_paciente_fk) references pacientes(id_paciente)
);
