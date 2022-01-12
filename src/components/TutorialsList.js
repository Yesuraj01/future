import React, { useState, useEffect } from "react";
import axios from "axios";

const TutorialsList = (props) => {
  const addTourUrl = "/api/add-tour";
  const tourUrl = "/api/tour";
  const editTourUrl = "/api/edit-tour";
  const [tourData, setTourData] = useState([]);
  const [tour, setTour] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addData, setAddData] = useState([]);
  const [tourStatus, setStatus] = useState([]);
  const [messages, setMessage] = useState([]);

  async function GetTourDetails() {
    try {
      const response = await axios(tourUrl);
      const value = response.data;
      setTour(value.data);
      //console.log(value)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    GetTourDetails();
  }, [count]);

  const OnInput = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const addTourData = {
    full_name: addData.full_name,
    email: addData.email,
    phone: addData.phone,
  };

  const AddTourDetails = () => {
    axios
      .post(addTourUrl, addTourData)
      .then((response) => {
        setStatus(response && response.data.status);
        setMessage(response && response.data.message);
        console.log(response);
        setShowModal(false);
        GetTourDetails();
      })
      .catch((error) => {
        setShowModal(true);
        console.log(error);
      });
  };

  const GetId = (id) => {
    setShowDeleteModal({ ...this, new_id: id });
    //console.log(showDeleteModal.new_id);
  };
  const GetEditId = (id) => {
    setShowModal(true);
    ShowTourDetails(id);
  };
  const GetViewId = (id) => {
    setViewModal(true);
    ShowTourDetails(id);
  };

  async function ShowTourDetails(id) {
    try {
      const showUrl = tourUrl + "/" + id;
      const response = await axios(showUrl);
      const value = response.data;
      setTourData(value.data);
    } catch (error) {
      setShowModal(true);
      console.error(error);
    }
  }

  const UpdateTourDetails = (id) => {
    const updateUrl = editTourUrl + "/" + id;
    axios
      .post(updateUrl, addTourData)
      .then((response) => {
        setStatus(response && response.data.status);
        setMessage(response && response.data.message);
        tourStatus.status == "success"
          ? setShowModal(false)
          : setShowModal(true);
        setShowModal(false);
        GetTourDetails();
      })
      .catch((error) => {
        setShowModal(true);
        console.log(error);
      });
  };
  const DeleteTourDetails = () => {
    const deleteUrl = tourUrl + "/" + showDeleteModal.new_id;
    const delId = {
      id: showDeleteModal.new_id,
    };

    axios
      .delete(deleteUrl, delId)
      .then((response) => {
        setStatus(response && response.data.status);
        setMessage(response && response.data.message);
        // message.status=='200' ? setShowDeleteModal(false) : setShowDeleteModal(true);
        setShowDeleteModal(false);
        GetTourDetails();
      })
      .catch((error) => {
        setShowDeleteModal(true);
        console.log(error);
      });
  };
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    // More people...
  ];

  return (
    <>
      {tourStatus && tourStatus == "success" && (
        <div class="flex">
          <div class="m-auto">
            <div class="bg-indigo-700 text-white rounded-lg border-gray-300 border p-3 shadow-lg">
              <div class="flex flex-row">
                <div class="px-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1792 1792"
                    fill="#44C997"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <div class="ml-2 mr-6">
                  <span class="font-semibold">{messages}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewModal && (
        <div
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div
                  onClick={() => setViewModal(false)}
                  class="cursor-pointer text-white absolute top-0 right-0 mt-10 mr-10 hover:text-white transition duration-150 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 bg-green-500 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Tour Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-white">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {tourData && tourData.full_name}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {tourData && tourData.email}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {tourData && tourData.phone}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Salary expectation
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          $120,000
                        </dd>
                      </div>

                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Attachments
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <ul
                            role="list"
                            className="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <span className="ml-2 flex-1 w-0 truncate">
                                  resume_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <span className="ml-2 flex-1 w-0 truncate">
                                  coverletter_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  onClick={() => setViewModal(false)}
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div>
          <div
            className="py-12 flex overflow-x-hidden overflow-y-auto fixed transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-start text-gray-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-wallet"
                    width={52}
                    height={52}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                  </svg>
                </div>
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                  Enter Tour Details
                </h1>
                <label
                  htmlFor="name"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="full_name"
                  onChange={(e) => OnInput(e)}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Enter the name"
                  value={tourData && tourData.full_name}
                />
                <label
                  htmlFor="email2"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Email
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-credit-card"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={3} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                      <line x1={7} y1={15} x2="7.01" y2={15} />
                      <line x1={11} y1={15} x2={13} y2={15} />
                    </svg>
                  </div>
                  <input
                    id="email2"
                    name="email"
                    onChange={(e) => OnInput(e)}
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                    placeholder="Enter the gmail"
                    value={tourData && tourData.email}
                  />
                </div>
                <label
                  htmlFor="expiry"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Phone Number
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-calendar-event"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={5} width={16} height={16} rx={2} />
                      <line x1={16} y1={3} x2={16} y2={7} />
                      <line x1={8} y1={3} x2={8} y2={7} />
                      <line x1={4} y1={11} x2={20} y2={11} />
                      <rect x={8} y={15} width={2} height={2} />
                    </svg>
                  </div>
                  <input
                    id="expiry"
                    name="phone"
                    onChange={(e) => OnInput(e)}
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Enter the phone number"
                    value={tourData && tourData.phone}
                  />
                </div>
                <label
                  htmlFor="cvc"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  CVC
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-info-circle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={12} y1={8} x2="12.01" y2={8} />
                      <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                  </div>
                  <input
                    id="cvc"
                    className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex items-center justify-start w-full">
                  <button
                    onClick={
                      tourData && tourData.full_name
                        ? UpdateTourDetails
                        : AddTourDetails
                    }
                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  >
                    Submit
                  </button>
                  <button
                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  onclick="modalHandler()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => setShowModal(false)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && showDeleteModal.new_id && (
        <div
          className="min-w-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="test">
              <div className="text-center p-5 flex-auto justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold py-4 ">Are you sure</h3>
                <p className="text-sm text-gray-500 px-8">
                  Do you really want to your account This cannot be undone{" "}
                </p>
              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => DeleteTourDetails(showDeleteModal.new_id)}
                  className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                  onClick={() => setShowDeleteModal(true)}
                  onClick={DeleteTourDetails}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col h-screen  py-10 bg-gray-200">
        <div className="flex flex-col px-20">
          <div className="flex justify-between items-center bg-white py-5 mb-4  sm:rounded-lg">
            <h4 className="px-6 text-xl font-bold leading-none text-gray-900 dark:text-white text-blue-600">
              Latest Customers
            </h4>
            <button
              type="submit"
              class="inline-flex justify-center mr-12 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setShowModal(true)}
            >
              Add
            </button>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Place
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tour?.map((data) => (
                      <tr key={data.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={data.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {data.full_name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {data.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {data.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {data.department}
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data.role}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                          <a
                            href="#"
                            onClick={() => GetViewId(data.id)}
                            className="text-green-500 hover:text-green-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            onClick={() => GetEditId(data.id)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            onClick={() => GetId(data.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsList;
