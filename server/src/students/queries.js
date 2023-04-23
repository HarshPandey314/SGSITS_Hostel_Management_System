const GetStudentById = "SELECT * FROM students WHERE id=$1";
const updatePassword =
  "UPDATE students SET status = '0', password=$1 WHERE id = $2;";
const addComplaint =
  "insert into complaints(enrollment , complaint ,contact, fullName, hostelBuilding, room, subject,status ) Values ($1,$2,$3,$4,$5,$6,$7,$8);";
const getComplaint = "SELECT * from complaints where enrollment = $1";
const getTitle = "SELECT DISTINCT(title) FROM Gallery;";
const getLinks = "SELECT links FROM Gallery WHERE title = $1;";
const addLinks = "INSERT INTO Gallery VALUES($1,$2);";
const addStudent = "INSERT INTO students VALUES($1,$2,$3,'1',$4,'xxxx',$5);";
const getComplaintByType =
  "SELECT * from complaints WHERE subject=$1 AND hostelbuilding=$2;";
const updateComplaint =
  "UPDATE complaints SET status='0' WHERE enrollment=$1 AND complaint=$2 AND contact=$3 AND fullName = $4 AND hostelBuilding = $5 AND room = $6 AND subject=$7;";

module.exports = {
  GetStudentById,
  updatePassword,
  addComplaint,
  getComplaint,
  getTitle,
  getLinks,
  addLinks,
  addStudent,
  getComplaintByType,
  updateComplaint,
};
