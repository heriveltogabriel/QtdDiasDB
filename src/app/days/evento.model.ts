
export class Evento {
	constructor
		(
			public id?: number,
			public titulo?: string,
			public descricao?: string,
            public dataInicio?: Date,
            public dataFinal?: Date, 
            public arquivado?: boolean,
			public dias?:number
	) { }
}