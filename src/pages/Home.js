import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [users, setUsers] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resultado = await axios.get("http://localhost:8080/users");
    setUsers(resultado.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Login</th>
              <th scope="col">Email</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((users, index) => (
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>

                  <td>
                    <Link className='btn btn-primary mx-2' to={`/viewuser/${users.id}`}>Buscar</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${users.id}`}>Editar</Link>
                    <button className='btn btn-danger mx-2'
                    onClick={() =>{deleteUsers(users.id)}}
                    >Apagar</button>
                  </td>
                
                </tr>                
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
