import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDetails, setCourseDetails] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      duration: 1,
    });
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3008/api/courses/allcourses"
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error retrieving courses:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3008/api/courses/createcourses", {
        courseName,
        courseDetails,
      });
      setCourseName("");
      setCourseDetails("");
      fetchCourses();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirmation(id);
  };

  const confirmDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3008/api/courses/deletecourse/${id}`
      );
      fetchCourses();
      setDeleteConfirmation(null);
    } catch (error) {
      console.error("Error removing course:", error);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <div className="w-full h-[85vh] mx-auto overflow-scroll p-4 bg-white shadow-md rounded-lg">
      <h1 className="heading text-center text-red-500 font-bold font-[oswald] text-4xl mt-6 tracking-wide">
        பாடநெறிகள் (Courses)
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label
            htmlFor="courseName"
            className="block text-sm font-bold text-red-700"
          >
            பாடநெறியின் பெயர் (Course Name):
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            className="mt-1 font-bold p-2 border border-black rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="courseDetails"
            className="block text-sm font-bold text-red-700"
          >
            பாட விவரங்கள் (Course Details):
          </label>
          <textarea
            id="courseDetails"
            value={courseDetails}
            onChange={(e) => setCourseDetails(e.target.value)}
            required
            className="mt-1 font-bold p-2 border border-black rounded-md w-full"
            rows="4"
          ></textarea>
        </div>
        <center>
          <button
            type="submit"
            className="mt-2 w-[15%] font-bold bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800"
          >
            பாடநெறி சேர்க்கவும் (Add Course)
          </button>
        </center>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          கிடைக்கும் பாடநெறிகள் (Available Courses)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white p-6 border-black rounded-lg border relative"
            >
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                {course.courseName}
              </h3>
              <p className="text-gray-600">{course.courseDetails}</p>
              <button
                onClick={() => handleDelete(course._id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Delete course"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">நீக்கல் உறுதி செய்யவா? (Confirm Deletion)</h3>
            <p>இந்த பாடநெறியை நீக்க விரும்புகிறீர்களா? (Are you sure you want to remove this course?)</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => confirmDelete(deleteConfirmation)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                நீக்கு (Delete)
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                ரத்து செய்ய (Cancel)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
