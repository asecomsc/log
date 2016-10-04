web app

2016-10-03

1. nodeJs ( en lugar de: web server/chrome extension )

2. jquery post
	* al usar get es muy facil de procesar en nodeJs
	* pero con post, se debe enviar el 2do parametro en json
	  y ademas, se debe usar middleware "body-parser" para procesar submit/body.

3. mysql
	* bd/uno, tabla/log
	* use sql insert para "room" y update para "sleep" y "seat".
	* en javascriptFE no hay manera de formatear fechas acordes para mysql, hice funcion fecha()
	*	create table log(
		diaId date not null primary key,
		room datetime,
		sleep datetime,
		seat datetime);
	

2016-09-16  

1. debugged en chrome - nokia lumia 520 via chrome 
extension  "Web Developer 0.4.7" by "chrispederick.com".

2. run well both:
* nokia 630 - nativo
* chrome - web developer nokia lumia 520