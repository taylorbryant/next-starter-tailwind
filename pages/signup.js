import { Account, ID } from "appwrite";
import { useState } from "react";
import appwriteClient from "utils/appwriteClient";

const account = new Account(appwriteClient);

export default function IndexPage() {
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  async function createUserAccount() {
    const promise = account.create(ID.unique(), newEmail, newPassword);

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("account created");
      },
      function (error) {
        alert("an error occurred");
        console.log(error); // Failure
      }
    );
  }

  return (
    <div>
      Email:
      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <br />
      Password:
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={() => createUserAccount()}>Create Account</button>
    </div>
  );
}

/*





*/
