const cursos = require ('./cursos');

// HU1 mostrar cursos ofertados
for (i = 1; i <= (cursos.cursos).length; i++) {
		cursos.mostrarCurso(cursos.buscarCurso(i),function(informacion){
		console.log(informacion);
	});
}
