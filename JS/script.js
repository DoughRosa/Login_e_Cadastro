const createAccount = async (event) => {
    event.preventDefault();
    try {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
  
      const data = {
        nome,
        email,
        senha,
      };
  
      localStorage.setItem("register", JSON.stringify(data));
  
      const dataSave = JSON.parse(localStorage.getItem("register"));
  
      const response = await api.post("signup", dataSave);
  
      console.log("conta criada", response.data);
  
      localStorage.removeItem("register");
  
      window.location.href = "../html/login.html";
    } catch (error) {
      const alert = document.getElementById("my-alert");
  
      alert.innerHTML = `<div class="alert alert-danger" role="alert">
      Invalid credentials!
    </div>`;
    }
  };
  
  const login = async (event) => {
    event.preventDefault();
    try {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
  
      const data = {
        email,
        senha,
      };
  
      localStorage.setItem("login", JSON.stringify(data));
  
      const dataSave = JSON.parse(localStorage.getItem("login"));
  
      const response = await api.post("login", dataSave);
  
      console.log("login realizado", response.data);
  
      localStorage.removeItem("login");
    } catch (error) {
      console.log(error);
    }
  };