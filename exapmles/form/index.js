const App = (data) => {
  const { login, password } = data;

  const loginInputHandler = (e) => {
    console.log(e.target.value)
    re.setData({
      ...data,
      login: e.target.value
    }, App);
  }

  const passwordInputHandler = (e) => {
    re.setData({
      ...data,
      password: e.target.value
    }, App);
  }

  const submitHandler = ()=>{
    document.querySelector('[data-re-login]').focus()
  }

  re.watch('[data-re-login]', 'change', loginInputHandler)
  re.watch('[data-re-password]', 'input', passwordInputHandler)
  re.watch('[data-re-child]', 'click', submitHandler)

  return (
    `
      <div>
        <div>
            <h1>Form</h1>
            Login: <input data-re-login type="text" value="${login}"/>
            Password: <input data-re-password type="password" value="${password}"/>            
            <br/>
            <button data-re-child>Submit</botton>
        </div>
        <div>
          login: ${login}
          <br/>
          password: ${password}
        </div>
      </div>  
  `)
}

re.start('re', App, { login: '', password: '' });
