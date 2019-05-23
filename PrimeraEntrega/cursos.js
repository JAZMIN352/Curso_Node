let cursos = [
    {
        id: 1,
        nombre: 'Node.JS',
        duracion: 32,
        valor: 0
    },
    {
        id: 2,
        nombre: 'Ingles',
        duracion: 64,
        valor: 410000
    },
    {
        id: 3,
        nombre: 'Excel',
        duracion: 16,
        valor: 125000
    }
];

let mostrarCurso = (curso,callback) => {
	setTimeout(function(){
			let informacion ='El curso ' + curso.nombre +
            ' con id ' + curso.id +
            ', tiene una duracion de ' + curso.duracion + ' horas' +
            ' y un valor de matricula: $'+ curso.valor;
			callback(informacion);	
		}, 2000 * cursos.indexOf(curso));		   
}

let buscarCurso = (idCurso) => cursos.find( oferta => oferta.id == idCurso);

module.exports = { 
    cursos,
    mostrarCurso,
    buscarCurso
};