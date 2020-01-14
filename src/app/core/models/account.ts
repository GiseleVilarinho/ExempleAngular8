export class Account {
 'id': number;
 'name': string;
 'email': string;
 'passowrd': string;
 constructor (data?:any) {
     Object.assign(this,data);
 }
}
