export class employee{
  empid: number
  empname: string
  constructor(id: number, name: string)
  {
    this.empid = id
    this.empname=name
  }
  display(workingdays:number)
  {
    if (workingdays >= 30)
      console.log("THE SALARY NEED TO NEED TO BE CREDIT IN EMPLOYEE ACCOUNT");
  }
  
}