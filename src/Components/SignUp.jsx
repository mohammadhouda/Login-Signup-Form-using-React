import React from "react";
import { useState } from "react";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    phone: "",
    email: "",
    citizenship: "",
    address: {
      country: "",
      city: "",
      street: "",
    },
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center place-items-center min-h-screen bg-slate-900 flex-col">
      <div className="sign-up-form flex justify-center place-items-center flex-col gap-4 p-5 rounded-md bg-white">
        <h2 className="relative pb-3 before:absolute before:h-1 before:w-full before:bottom-0 after:absolute after:bottom-0 after:h-1 after:left-0 after:w-1/2 after:bg-slate-900 after:rounded-sm before:bg-orange-400 font-bold text-4xl text-orange-400 before:rounded-sm mb-5">
          Sign Up
        </h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-3 mb-4">
            <div>
              <input
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex gap-20  mb-4">
            <div>
              <label>Gender:</label>
              <select
                className="outline-none text-base  p-1"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label>Birth Date:</label>
              <input
                className=" outline-none text-base  p-1"
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-3 mb-4">
            <div>
              <input
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                className=" outline-none text-base border-b border-b-slate-900 p-1"
                name="citizenship"
                placeholder="Citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-between gap-3 mb-4">
            <input
              className=" outline-none text-base border-b border-b-slate-900 p-1"
              type="text"
              name="country"
              placeholder="Country"
              value={formData.address.country}
            />
            <input
              className=" outline-none text-base border-b border-b-slate-900 p-1"
              type="text"
              name="city"
              placeholder="City"
              value={formData.address.city}
            />
            <input
              className=" outline-none text-base border-b border-b-slate-900 p-1"
              type="text"
              name="street"
              placeholder="Street"
              value={formData.address.street}
            />
          </div>
          <div className=" mb-5">
            <label className="text-slate-900 font-semibold mr-2" for="upload">
              Upload Excel File:
            </label>
            <input
              className=" text-slate-900 font-semibold ml-2"
              id="upload"
              type="file"
              accept=".xls,.xlsx"
            />
          </div>
          <hr></hr>
          <button
            className=" bg-orange-500 text-white py-2 font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
