const pool = require("../../db");
const queries = require("./queries");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { EMAIL, PASSWORD } = require("../../hostelPass");
const otpGenerator = require("otp-generator");
const { json } = require("express");

const getStudents = (req, res) => {
  res.send("all students");
};
const getStudentsById = (req, res) => {
  console.log("Hiiii");
  const id = req.body.enrollmentNo;
  pool.query(queries.GetStudentById, [id], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const sendMail = (req, res) => {
  console.log("Hiiii");

  const userEmail = req.body;
  console.log(userEmail);
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  console.log(otp);
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "GS HOSTEL OFFICE",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: userEmail.name,
      intro: "This is Your OTP",
      table: {
        data: [
          {
            OTP: otp,
          },
        ],
      },
      outro: "This OTP will expire in 1 hour",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail.email,
    subject: "Verification Code",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        status: "1",
        OTP: otp,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};
const updatePassword = (req, res) => {
  console.log("Hiiii");

  const password = req.body.password;
  const enrollmentNo = req.body.enrollmentNo;
  const value = [password, enrollmentNo];
  pool.query(queries.updatePassword, value, (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const addComplaint = (req, res) => {
  console.log("Hiiii");
  const status = "1";
  pool.query(
    queries.addComplaint,
    [
      req.body.enrollment,
      req.body.complaint,
      req.body.contact,
      req.body.fullName,
      req.body.hostelBuilding,
      req.body.room,
      req.body.subject,
      status,
    ],
    (error, response) => {
      if (error) throw error;
      res.status(200).json({ status: "ok" });
    }
  );
};
const getComplaint = (req, res) => {
  console.log("Hiiii");

  pool.query(queries.getComplaint, [req.body.enrollment], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const getTitle = (req, res) => {
  console.log("Hiiii");

  pool.query(queries.getTitle, (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const getLinks = (req, res) => {
  console.log("Hiiii");

  pool.query(queries.getLinks, [req.body.title], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const addLinks = (req, res) => {
  console.log("Hiiii");

  const title = req.body.title;
  const link = req.body.link;
  pool.query(queries.addLinks, [title, link], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const addStudent = (req, res) => {
  pool.query(
    queries.addStudent,
    [
      req.body.enrollment,
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.room,
    ],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};
const getComplaintByType = (req, res) => {
  pool.query(
    queries.getComplaintByType,
    [req.body.type, req.body.hostel],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};
const updateComplaint = (req, res) => {
  console.log(req.body);
  console.log("controller log");
  pool.query(
    queries.updateComplaint,
    [
      req.body.statusCode,
      req.body.enrollment,
      req.body.complaint,
      req.body.contact,
      req.body.fullname,
      req.body.hostelbuilding,
      req.body.room,
      req.body.subject,
    ],
    (error, response) => {
      if (error) throw error;
      res.status(200).json(response.rows);
    }
  );
};
module.exports = {
  getStudents,
  getStudentsById,
  sendMail,
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
