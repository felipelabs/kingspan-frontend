import React from 'react'

export default function AddUser() {
  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4"> Registro de Usuário</h2>
        <div className="mb-3">
          <label htmlFor='Name' className="form-label">Nome</label>
          <input
            type={"text"}
            className ="form-control"
            placeholder="Digite seu nome"
            name='name'
          />
        </div>
        <div className="mb-3">
          <label htmlFor='Username' className="form-label">Login</label>
          <input
            type={"text"}
            className ="form-control"
            placeholder="Digite seu Login"
            name='username'
          />
        </div>
        <div className="mb-3">
          <label htmlFor='Email' className="form-label">Email</label>
          <input
            type={"text"}
            className ="form-control"
            placeholder="Digite seu email"
            name='email'
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">Salvar</button>
        <button type="submit" className="btn btn-outline-danger mx-2">Cancelar</button>
      </div>
    </div>
  </div>;

}
