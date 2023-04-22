const GetStudentById = "SELECT * FROM students WHERE id=$1";
const updatePassword =
  "UPDATE students SET status = '0', password=$1 WHERE id = $2;";
const addComplaint =
  "insert into complaints(enrollment , complaint ,contact, fullName, hostelBuilding, room, subject,status ) Values ($1,$2,$3,$4,$5,$6,$7,$8);";
const getComplaint = "SELECT * from complaints where enrollment = $1";
const getTitle = "SELECT DISTINCT(title) FROM Gallery;";
const getLinks = "SELECT links FROM Gallery WHERE title = $1;";
const addLinks = "INSERT INTO Gallery VALUES($1,$2);";
module.exports = {
  GetStudentById,
  updatePassword,
  addComplaint,
  getComplaint,
  getTitle,
  getLinks,
  addLinks,
};
