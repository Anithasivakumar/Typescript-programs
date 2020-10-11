class hospital {
  patientid: number;  //property
  patientname: string;
  ct: string;
  consultanttime()    //method
  {
    console.log("CONSULTING HOURS :" +this. ct);
  }
  constructor(id: number, name: string)     //constructor
  {
    this.patientid = id;
    this.patientname = name;
  }
}
class doctor extends hospital //singleinheritance
{
  doctorname: string;
display()
{
  console.log("PATIENT ID:" + this.patientid);
  console.log("PATIENT NAME:" + this.patientname);
  console.log("DOCTOR NAME:" + this.doctorname);
}
}
class medicaldetails extends doctor  //multilevel inheritance
{
  medicalpblm: string;
  display()
  {
    super.display()
    console.log("Medical problem :" + this.medicalpblm);
  }
}
class intime extends hospital      //hierarchial inheritance
{
  consultanttime()
  {
    super.consultanttime()
  }
  }
var obj1 = new medicaldetails(104, "kumar");      //invoke variable declared in  above class
obj1.medicalpblm = "Diabetes";
obj1.doctorname = "Dr.karthick";
obj1.ct = "9.30 AM";
obj1.display();                               // invoking method from class
obj1.consultanttime();