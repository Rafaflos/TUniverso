Turismo Universo - Sistema de Gestión de Transporte

Descripción
El sistema de Turismo Universo es una plataforma de gestión de transporte interprovincial que permite a los usuarios gestionar rutas, buses, conductores, boletos y pagos, además de tener un historial de viajes y reportes de ventas. El sistema incluye una API backend creada con Spring Boot y una base de datos relacional que gestiona toda la información necesaria para operar una empresa de transporte.

Características

Gestión de usuarios (Clientes y Empleados).
Administración de rutas, buses y conductores.
Emisión de boletos y programación de rutas.
Registro y procesamiento de pagos.
Historial de viajes para los usuarios.
Reportes de ventas para empleados.
Sistema de roles y permisos para control de acceso.
Tecnologías Utilizadas
Backend: Spring Boot
Base de datos: MySQL
Gestión de dependencias: Maven
Seguridad: Spring Security (JWT)
ORM: Hibernate (JPA)
Conexión a base de datos: MySQL Connector
Documentación API: Swagger (opcional)
Instalación
Clonar el repositorio:

git clone https://github.com/Rafaflos/TUniverso.git

cd turismo-universo

Configurar la base de datos:

Crear una base de datos en MySQL llamada turismo_universo.
Configurar las credenciales de conexión a la base de datos en el archivo application.properties:
properties
Copiar código
spring.datasource.url=jdbc:mysql://localhost:3306/turismo_universo
spring.datasource.username=tu-usuario
spring.datasource.password=tu-contraseña
spring.jpa.hibernate.ddl-auto=update
Instalar dependencias con Maven:

mvn clean install

Ejecutar la aplicación:

mvn spring-boot:run

Acceder a la aplicación:

La aplicación se ejecutará en: http://localhost:8081


Base de Datos
El proyecto utiliza una base de datos relacional en MySQL. A continuación, se incluyen algunas de las principales tablas:

Usuarios: Almacena la información de clientes y empleados.
Buses: Registro de buses de la flota.
Conductores: Información sobre los conductores.
Programación de Rutas: Asocia las rutas con buses y conductores.
Boletos: Registra las compras de boletos por los usuarios.
Pagos: Detalla los métodos de pago utilizados para los boletos.
Seguridad
El proyecto utiliza Spring Security con JWT para proteger las rutas y gestionar la autenticación de usuarios. Solo los usuarios con roles apropiados (cliente, empleado, admin) pueden acceder a determinadas funcionalidades.

Contribuir
Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Haz tus cambios y confirma tus commits (git commit -m 'Añadir nueva característica').
Sube tus cambios (git push origin feature/nueva-caracteristica).
Abre un pull request en este repositorio.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


