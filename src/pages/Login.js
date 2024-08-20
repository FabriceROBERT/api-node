import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [pswd, setPswd] = useState(null);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [error, setError] = useState(null);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  );

  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  async function loginUser(credentials) {
    return await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        if ("error" in data) {
          setError(data.error);
        } else {
          localStorage.setItem("token", data.token);
        }
        return data;
      });
  }
  const validate = (e) => {
    let isValid = true;
    if (!validEmail.test(email)) {
      setEmailErr(true);
      isValid = false;
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(pswd)) {
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
      const response = await loginUser({
        email,
        pswd,
      });
      console.log(response);
      localStorage.setItem("token", response.token);
      if ("error" in response) {
        setError(response.error);
      } else {
        localStorage.setItem("token", response.token);
        window.location.href = "/";
      }
    }
  };

  return (
    <div>
      <div className="flex p-2 flex-col">
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
        <button
          className="bg-blue-500 mt-5 text-white py-2 rounded-md"
          onClick={handleSubmit}
        >
          Se Connecter
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
