namespace library
{
  export function studentdetails(name:  string, rollno:string,dept: string)    //function with arguments
  {
    console.log("NAME IS:" + name);
    console.log("ROLL NO IS:" + rollno);
    console.log("DEPARTMENT IS :" + dept);
  }
  export class bookdetails
  {                   //class
    bookidno: number
    noofbooks: number
    constructor(id: number, no: number)     //constructor
    {   
      this.bookidno = id;
      this.noofbooks = no;
    }
    bookuser()   //method
    {
      if (this.noofbooks > 4)
        console.log("Books will not be taken from library");
      else
        console.log("Enjoy the freedom of learning");
    }     
  }
}