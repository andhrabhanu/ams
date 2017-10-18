export class Request { 

	constructor( 
		public property: string,
        public tenant: string,
        public requestTitle: string,
        public priority: string,
        public description: string ) {
	}
}
    