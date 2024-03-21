import React, { useEffect, useState } from 'react'
import Header from './Header'

const Page2 = () => {
    const [submission, setSubmission] = useState([]);
    useEffect(() => {
      fetch('https://code-easy-be.vercel.app/submission')
      .then(res => res.json())
      .then(res => {
        if(res.error){
            console.log(res.error);
            alert('error in fetching submission');
        }else{
            setSubmission(res.submissions);
        }
      });
    }, []);

    const handleDelete = async (id) => {
        const res = await fetch(`https://code-easy-be.vercel.app/submission/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
          });
        if (res.error) {
            alert(res.error);
        } else {
            const newData = submission.filter(item => item.id != id);
            setSubmission(newData);
        }
    }
    
  return (
    <>
      <Header />
      <div className="rounded-lg mt-5 w-fit max-w-[95%] mx-auto overflow-x-auto max-h-[80vh] overflow-y-auto">
        {submission.length === 0 && (
          <h1 className="bg-[rgb(248,161,161)] w-full px-5 py-3 my-20 rounded">
            No submission to show
          </h1>
        )}
        {submission.length !== 0 && (
          <table>
            <thead className="bg-[rgb(248,161,161)] rounded-t-lg">
              <tr>
                <th scope="col" className="px-4 py-2">
                  Username
                </th>
                <th scope="col" className="px-4 py-2">
                  Language
                </th>
                <th scope="col" className="px-4 py-2 w-32">
                  Stdin
                </th>
                <th scope="col" className="px-4 py-2 w-72">
                  Source code
                </th>
                <th scope="col" className="px-4 py-2">
                  Submitted at
                </th>
                <th scope="col" className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="bg-red-100 rounded-lg">
              {submission.map((item, index) => (
                <tr
                  className={`${
                    index + 1 === submission.length ? "" : "border-b"
                  } hover:bg-pink-50`}
                  key={index}>
                  <td className="px-4 py-2">{item.username}</td>
                  <td className="px-4 py-2">{item.language}</td>
                  <td className="px-4 py-2">{item.stdin}</td>
                  <td className="px-4 py-2 break-all">{item.sourceCode}</td>
                  <td className="px-4 py-2 break-all">{item.createdAt}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-gradient-to-r from-gray-400 to-gray-600 text-red-100 border rounded-2xl py-1 px-3"
                      onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Page2