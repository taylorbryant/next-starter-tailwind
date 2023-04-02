import { Account } from "appwrite";

import { useState } from "react";

import appwriteClient from "utils/appwriteClient";

const account = new Account(appwriteClient);

export default function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function loginUser() {
    const promise = account.createEmailSession(email, password);

    promise.then(
      function (response) {
        console.log(response); // Success
        alert(response);
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password:
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => loginUser()}>Login</button>
    </div>
  );
}

/*





*/
