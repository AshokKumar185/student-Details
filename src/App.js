import {Component} from 'react'
import AddStudent from './components/AddStudent'

import './App.css'

const studentDetailsList = [
  {
    id: 1,
    name: 'Siva',
    lastname: 'Balan',
    location: 'Madurai',
    email: 'sivalbalan65@gmail',
    DOB: '5/5/1998',
    education: 'B.E',
  },
  {
    id: 2,
    name: 'Priya',
    lastname: 'lakshmi',
    location: 'Madurai',
    email: 'priya525@gmail',
    DOB: '2/8/2001',
    education: 'M.sc',
  },
  {
    id: 3,
    name: 'Raja',
    lastname: 'Pandi',
    location: 'Madurai',
    email: 'raja2365@gmail',
    DOB: '28/1/200',
    education: 'B.E',
  },
]

class App extends Component {
  state = {
    isUpdate: true,
    isDelete: false,
    inUpdateBtn: false,
    searchInput: '',
    firstnames: '',
    lastnames: '',
    emails: '',
    dobs: '',
    educations: '',
    locations: '',
    ids: studentDetailsList.length + 1,
    isId: 0,
  }

  getFirstName = event => {
    this.setState({firstnames: event.target.value})
  }

  getLastName = event => {
    this.setState({lastnames: event.target.value})
  }

  getEmail = event => {
    this.setState({emails: event.target.value})
  }

  getDob = event => {
    this.setState({dobs: event.target.value})
  }

  getEducation = event => {
    this.setState({educations: event.target.value})
  }

  getLocation = event => {
    this.setState({locations: event.target.value})
  }

  clickToAddNewStudent = () => {
    const {
      firstnames,
      lastnames,
      emails,
      dobs,
      educations,
      locations,
      ids,
    } = this.state

    const newStudent = {
      id: ids,
      name: firstnames,
      lastname: lastnames,
      location: locations,
      email: emails,
      DOB: dobs,
      education: educations,
    }

    studentDetailsList.push(newStudent)

    localStorage.getItem('student', newStudent)

    this.setState(prevState => ({isUpdate: !prevState.isUpdate}))
  }

  updatePage = () => {
    this.setState(prevState => ({isUpdate: !prevState.isUpdate}))
  }

  createNewStudent = () => {
    const {
      inUpdateBtn,
      firstnames,
      lastnames,
      emails,
      dobs,
      educations,
      locations,
    } = this.state

    return (
      <form
        className="new-student-container"
        onSubmit={this.clickToAddNewStudent}
      >
        <h1 className="form-head">Add Student Details</h1>
        <div className="input-container1">
          <div className="label-input">
            <label htmlFor="firstName" className="label">
              First Name:
            </label>
            <input
              type="name"
              id="firstName"
              placeholder="Enter your Name"
              required
              value={firstnames}
              onChange={this.getFirstName}
            />
          </div>
          <div className="label-input">
            <label htmlFor="lastName" className="labe">
              Last Name:
            </label>
            <input
              type="name"
              id="lastName"
              placeholder="Enter your Last Name"
              required
              onChange={this.getLastName}
              value={lastnames}
            />
          </div>
        </div>
        <div className="input-container1">
          <div className="label-input">
            <label htmlFor="email" className="lab">
              Email :
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
              onChange={this.getEmail}
              value={emails}
            />
          </div>
          <div className="label-input">
            <label htmlFor="dob" className="labe">
              DOB:
            </label>
            <input
              type="date"
              id="dob"
              placeholder="DD/MM/YYY"
              required
              className="date"
              onChange={this.getDob}
              value={dobs}
            />
          </div>
        </div>
        <div className="input-container1">
          <div className="label-input">
            <label htmlFor="education" className="labe">
              Education:
            </label>
            <input
              type="education"
              id="education"
              placeholder="Enter your Education"
              required
              onChange={this.getEducation}
              value={educations}
            />
          </div>
          <div className="label-input">
            <label htmlFor="location" className="labe">
              Location:
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your Location"
              required
              onChange={this.getLocation}
              value={locations}
            />
          </div>
        </div>
        <div className="about-container">
          <p htmlFor="about" className="lab">
            About:
          </p>
          <textarea
            cols="200"
            placeholder="Enter your details"
            rows="8"
            id="about"
            required
            className="about"
            onChange={this.getAbout}
          />
        </div>
        <button className="submit-btn" type="submit">
          {inUpdateBtn ? 'Update' : 'Submit'}
        </button>
      </form>
    )
  }

  clickToDeleteStudent = id => {
    this.setState(prevState => ({
      isDelete: !prevState.isDelete,
    }))
    this.setState({isId: id})
  }

  clickToCancel = () => {
    this.setState(prevState => ({isDelete: !prevState.isDelete}))
  }

  deleteItem = () => {
    const {isId} = this.state
    const filterStudent = studentDetailsList.findIndex(
      eachStudent => eachStudent.id === isId,
    )
    if (filterStudent !== -1) {
      studentDetailsList.splice(filterStudent, 1)
    }
    this.setState(prevState => ({isDelete: !prevState.isDelete}))
  }

  deleteStudent = () => {
    const {isDelete, isId} = this.state
    return (
      <div className="delete-container">
        <img
          src="https://icons.veryicon.com/png/o/transport/shopping-mall/delete-127.png"
          alt="delete"
          className="delete-top"
        />
        <h2 className="delete-head">Are you sure you want to Delete</h2>
        <div>
          <button
            type="button"
            className="cancel-btn cancel"
            onClick={this.clickToCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="yes-btn yes"
            onClick={this.deleteItem}
          >
            Yes
          </button>
        </div>
      </div>
    )
  }

  clickToEditStudent = () => {
    const {firstnames} = this.state
    this.setState(prevState => ({
      isUpdate: !prevState.isUpdate,
      inUpdateBtn: !prevState.inUpdateBtn,
    }))
  }

  searchStudent = event => {
    this.setState({searchInput: event.target.value})
  }

  getStudentDetails = () => {
    const {searchInput} = this.state
    const filterSearch = studentDetailsList.filter(eachStudent =>
      eachStudent.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="card-container">
        <h1 className="head">Student Management System</h1>
        <div className="input-btn-container">
          <div className="input-search">
            <input
              type="search"
              className="input"
              placeholder="Search"
              value={searchInput}
              onChange={this.searchStudent}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="searchIcon"
              className="search-icon"
            />
          </div>
          <button
            className="add-btn add"
            type="button"
            onClick={this.updatePage}
          >
            Add
          </button>
        </div>
        <ul className="details-container">
          <li className="details-head">
            <p>ID</p>
            <p>Name</p>
            <p>Last Name</p>
            <p>Location</p>
            <p>Email</p>
            <p>DOB</p>
            <p>Education</p>
            <p>Action</p>
            <p>Delete</p>
          </li>
          <hr />
          {filterSearch.map(eachStudent => (
            <AddStudent
              eachStudent={eachStudent}
              key={eachStudent.id}
              clickToEditStudent={this.clickToEditStudent}
              clickToDeleteStudent={this.clickToDeleteStudent}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isUpdate, isDelete, message} = this.state

    return (
      <div className="bg-container">
        {isDelete ? this.deleteStudent() : ''}
        {isUpdate ? this.getStudentDetails() : this.createNewStudent()}
        <p>{message}</p>
      </div>
    )
  }
}
export default App
