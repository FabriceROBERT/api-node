import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pswd, setPswd] = useState(null);
  const [pswdConfirm, setPswdConfirm] = useState(null);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  );

  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  async function loginUser(credentials) {
    return await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const validate = (e) => {
    let isValid = true;
    if (!validEmail.test(email)) {
      setEmailErr(true);
      isValid = false;
    } else {
      setEmailErr(false);
    }
    if (
      !validPassword.test(pswd) ||
      validPassword.test(pswd) !== validPassword.test(pswdConfirm)
    ) {
      setPasswordErr(true);
      isValid = false;
    } else {
      setPasswordErr(false);
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      let res = await loginUser({
        name,
        email,
        pswd,
      });
      console.log(res);
    }
  };
  return (
    <div>
      <h1 className="text-center p-5 font-bold text-2xl">Register</h1>
      <div className="flex p-2 flex-col">
        <label>Nom</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          onChange={(e) => setPswd(e.target.value)}
          value={pswd}
        />
        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          onChange={(e) => setPswdConfirm(e.target.value)}
          value={pswdConfirm}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 mt-5 text-white py-2 rounded-md"
        >
          S'inscrire
        </button>
        {emailErr && <p>Your email is not correct</p>}
        {passwordErr && <p>Your password is not correct</p>}
      </div>
    </div>
  );
}
