import { Link } from "react-router-dom"
import { Context } from "../store/context";
import { useContext, useEffect } from "react";
import { Contact } from "./Contact";

export const Porfile = () => {
  const { store: { contacts }, actions: { getContacts } } = useContext(Context)
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
        <Link to="/newConctact">
          <button type="button" className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      {
        contacts.map(user => {
          return (
            <Contact user={user} key={user.id} />
          )
        })
      }
    </>
  )
}

export default Porfile