// tslint:disable-next-line:class-name
export default class userDto {
  private _name: string;
  private _type: string;
  private _noOfQue: number;
  private _noOfAns: number;
  private _quection: any;


  constructor(name: string, type: string, noOfQue: number, noOfAns: number, quection: any) {
    this._name = name;
    this._type = type;
    this._noOfQue = noOfQue;
    this._noOfAns = noOfAns;
    this._quection = quection;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get noOfQue(): number {
    return this._noOfQue;
  }

  set noOfQue(value: number) {
    this._noOfQue = value;
  }

  get noOfAns(): number {
    return this._noOfAns;
  }

  set noOfAns(value: number) {
    this._noOfAns = value;
  }

  get quection(): any {
    return this._quection;
  }

  set quection(value: any) {
    this._quection = value;
  }
}
