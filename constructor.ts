class student
{
  stname: string;
  rollno: number;
  constructor(N: string, R: number)
  {
    this.stname = N;
    this.rollno = R;
  }
  score(mark: number)
  {
    if (mark >= 45)
      console.log("pass mark:" + mark);
    else
      console.log("fail mark:" + mark);
  }
}
var ob1 = new student("Anitha", 4);
console.log(ob1.stname);
console.log(ob1.rollno);
ob1.score(90);
ob1.score(40);
