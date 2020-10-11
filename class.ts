class Team
{
  public colleagues: string;  //variable
  public Projectmanager: string; //variable
  projectcompletion(days: number)  //method with arguments
  {
    if (days<= 30)
    {
      console.log("The project has completed");
    }
    else
    {
      console.log("The project has not completed");
      }

  }
}
var ob1 = new Team();  //object created
ob1.colleagues = "IOT BASED PROJECTS MEMBERS";
console.log(ob1.colleagues);
ob1.projectcompletion(25);
ob1.projectcompletion(45);
var ob2 = new Team();