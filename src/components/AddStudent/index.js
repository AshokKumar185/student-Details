import './index.css'

const AddStudent = props => {
  const {eachStudent, clickToEditStudent, clickToDeleteStudent} = props
  const {
    id,
    name,
    lastname,
    location,
    email,
    DOB,
    education,
    isDelete,
  } = eachStudent
  const clickToDelete = () => {
    clickToDeleteStudent(id)
  }
  const clickToEdit = () => {
    clickToEditStudent(id)
  }

  return (
    <>
      {' '}
      <li className="student-container">
        <p className="transaction-text">{id}</p>
        <p className="transaction-text">{name}</p>
        <p className="transaction-text">{lastname}</p>
        <p className="transaction-text">{location}</p>
        <p className="transaction-text">{email}</p>
        <p className="transaction-text">{DOB}</p>
        <p className="transaction-text">{education}</p>
        <button className="edit" type="button" onClick={clickToEdit}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/account-1/64/Account-07-512.png"
            alt="edit"
            className="edit-icon"
          />
          <p>Edit</p>
        </button>
        <button type="button" className="delete" onClick={clickToDelete}>
          <img
            src="https://icons.veryicon.com/png/o/transport/shopping-mall/delete-127.png"
            alt="delete"
            className="delete-icon"
          />
          <span>Delete</span>
        </button>
      </li>
      <hr />
    </>
  )
}
export default AddStudent
