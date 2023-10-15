const express = require('express');
const {
  createStudentProfile,
  Login,
  readStudentProfile,
  updateStudentProfile,
  deleteStudentProfile,
  readAllStudentsProfiles,
} = require('../controllers/studentsController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const {
  createStudentWorks,
  readStudentWorks,
  deleteStudentWorks,
  updateStudentWorks,
} = require('../controllers/worksController');
const { generateOTP, verifyOTP } = require('../controllers/otpController');
const router = express.Router();

//StudentProfile routes
router.get('/readAllStudentsProfiles', readAllStudentsProfiles);
router.post('/createStudentProfile', createStudentProfile);
router.post('/Login', Login);
router.get('/readStudentProfile', AuthVerifyMiddleware, readStudentProfile);
router.post(
  '/updateStudentProfile',
  AuthVerifyMiddleware,
  updateStudentProfile
);
router.get('/deleteStudentProfile', AuthVerifyMiddleware, deleteStudentProfile);

//StudentWorks routes
router.post('/createStudentWorks', AuthVerifyMiddleware, createStudentWorks);
router.get('/readStudentWorks/:id', AuthVerifyMiddleware, readStudentWorks);
router.get('/deleteStudentWorks/:id', AuthVerifyMiddleware, deleteStudentWorks);
router.post(
  '/updateStudentWorks/:id',
  AuthVerifyMiddleware,
  updateStudentWorks
);

//otp routes

router.post('/generate', generateOTP);
router.post('/verify', verifyOTP);

module.exports = router;
