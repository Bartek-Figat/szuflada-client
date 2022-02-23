import React from 'react';

export const RegisterUserForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Kliknięto na przycisk Wyślij.');
  }
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col w-1/4 mx-auto pt-12 bg-white">
        <form
          className="flex flex-col justify-center py-8 px-6 shadow rounded-lg"
          onSubmit={handleSubmit}
        >
          <input type="text" name="userName" placeholder="User Name" className="singin-form" />
          <input type="email" name="email" placeholder="Email" className="singin-form" />
          <input type="password" name="password" placeholder="Password" className="singin-form" />
          <button className="bg-blue-600 w-full m-3 py-2 px-1 rounded-lg text-white">Singin</button>
        </form>
      </div>
    </div>
  );
};
