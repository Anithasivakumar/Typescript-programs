interface studdetails   //creating the interface
{
  rollno: number;  //properties
  name: string;
  getrollno();
  getname();  //method without arguments
}
interface resultdetails
{
  dept: string;
  getdept();
  checkresult(im: number)  //method with arguments
} //implementing the interface below
class student implements studdetails, resultdetails
{
  rollno: number;  //properties
  name: string;
  dept: string;
  getname()
  {
    return this.name;
  }
  getrollno()
  {
    return this.rollno;
  }
  getdept()
  {
      return this.dept;
  }
  checkresult(im:number)
  {
    if (im >= 14)
    {
      console.log("THE RESULT IS PASS");
    }
    else
    {
      console.log("THE RESULT IS PASS");
    }
  }
  constructor(stdtname: string,stdtrollno: number,DEPT:string)
  {
    this.name = stdtname;
    this.rollno = stdtrollno;
    this. dept = DEPT;
  }
} //using the class implements the interface
var obj = new student("S.ANITHA",4,"CSE")
var a= obj.getname();
var b = obj.getrollno();
var c = obj.getdept();
console.log("STUDENT:" + a + "\nROLLNO:" + b + "\nDepartment:" + c);
var d = obj.checkresult(19);
