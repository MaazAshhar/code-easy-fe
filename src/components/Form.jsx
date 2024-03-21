import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("C++");
  const [stdin, setStdin] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      language: language,
      stdin: stdin,
      sourceCode: sourceCode,
    };
    if (username.trim().length===0) {
      alert("username can't be empty");
    }else if(sourceCode.trim().length === 0){
      alert("source code can't be empty");
    }
     else {
      fetch("https://code-easy-be.vercel.app/submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            setUsername("");
            setLanguage("");
            setStdin("");
            setSourceCode("");
          } else {
            navigate("/submission");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-[100%] sm:w-[70%] bg-red-100 px-5 pt-5 rounded-b-lg sm:rounded-bl-none rounded-r-lg">
      <h1 className="font-medium text-xl">
        Please provide following field to get the output
      </h1>
      <form className="mt-3">
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          name="username"
          className="rounded-xl px-3 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <select
          className="my-5 px-3 py-2 rounded-xl"
          name="languages"
          id="languages"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Stdin"
          name="stdInput"
          id="stdInput"
          className="rounded-xl px-3 py-2 my-5"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
        />
        <br />
        <textarea
          className="max-w-full rounded-xl px-3 py-2"
          name="sourceCode"
          id="sourceCode"
          cols="50"
          rows="5"
          placeholder="write code here"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}></textarea>
        <br />
        <button
          className="bg-gradient-to-r from-gray-400 to-gray-600 text-red-100 border rounded-2xl py-1 px-3 mb-4"
          onClick={handleSubmit}
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
