export class Category {
  [x: string]: any
	id: number
	title: string
	
	constructor(id: number, title: string) {
		this.id = id
		this.title = title
	}
}