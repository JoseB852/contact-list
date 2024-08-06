const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      info: {},
      contacts: []
    },
    actions: {


      getContacts: async () => {
        try {
          const response = await
            fetch('https://playground.4geeks.com/contact/agendas/conctacts/contacts', {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
          const data = await response.json();
          setStore({
            info: data.info,
            contacts: data.contacts,
          });
        } catch (error) {
          console.log(error);


        }

      },
      deleteContact: async (id) => {
        fetch('https://playground.4geeks.com/contact/agendas/conctacts/contacts/' + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((contacts) => {

            if (contacts.ok)
              // contacts(contacts.filter((contacts) => id !== contacts.id))
              getActions().getContacts()
          })
          .catch((error) => console.log(error));
      },

      createContact: async (setValues, values) => {
        fetch("https://playground.4geeks.com/contact/agendas/conctacts/contacts", {

          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },

        })

          .then((response) => response.json())
          .catch((error) => console.log(error));
        setValues({ name: "", phone: "", email: "", address: "" });



      },

      editContact: (data, id) => {
        fetch("https://playground.4geeks.com/contact/agendas/conctacts/contacts/" + id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .catch((error) => console.log(error));
      }


    },
  }
}


export default getState;