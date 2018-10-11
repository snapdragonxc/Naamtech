import React from 'react';
import { Link } from 'react-router-dom';
import MsgDate from './MsgDate';

const Messages = ({
  messages,
  onDelete,
}) => (
  <div>
    <div className="d-flex justify-content-between mb-2">
      <div>({messages.length}) Messages</div>
      <div><Link to="/add" className='btn btn-info text-white'role="button">+ Msg</Link></div>
    </div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Message</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            messages.map(({
              id,
              name,
              date,
              txt,
            }, index) => (
              <tr key={index}>
                <td><MsgDate date={date}/></td>
                <td>{name}</td>
                <td>{txt}</td>
                <td className="text-center"><Link to={`/edit/${id}`}><i className="far fa-edit"></i></Link></td>
                <td className="text-center"><a href="" role="button" onClick={event => onDelete(event, id)}><i className="far fa-trash-alt"></i></a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
  </div>
);
export default Messages;
