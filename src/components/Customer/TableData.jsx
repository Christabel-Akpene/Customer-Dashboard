import React from 'react'
import "./Customer.css"

const TableData = ({theData}) => {

      const planStyle = (plan) => {
        switch (plan) {
          case "basic":
            return { color: "#A45EE5", background: "#E39FF6" };
          case "team":
            return { color: "#F26B8A", background: "#FC94AF" };
          case "premium":
            return { color: "#1E90FF", background: "#82EEFD" };
        }
      };
  return (
    <tbody>
        {
            theData.map(({fullName, email, billingDate, plan, totalUsers, amount}) =>{
                return (
                
                  <tr key={Math.random()}>
                    <td>
                      <div className="name bold">
                        <p>{fullName}</p> <p>{email}</p>
                      </div>
                    </td>
                    <td className='hide'>{billingDate}</td>
                    <td>
                      {" "}
                      <div className="plan" style={planStyle(plan)}>
                        {plan}{" "}
                      </div>{" "}
                    </td>
                    <td className="bold">${amount}/year</td>

                    <td className='hide'>
                      <div className="name bold">
                        <p>{totalUsers} Users </p> <p>average</p>
                      </div>
                    </td>
                    <td>
                      <a href="#">View Details</a>
                    </td>
                    <td>...</td>
                  </tr>
                );
            })
        }
    </tbody>
  )
}

export default TableData