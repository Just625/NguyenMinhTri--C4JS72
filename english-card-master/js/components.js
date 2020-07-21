const components = {};
components.collectionUserScreen = `
<div class="add-collection-card">
        <nav>
            <div class="nav-bar-container">
                <div class="logo">
                    ECARD
                </div>
                <div class="list-main-navbar">
                    <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
                    <div class="navbar-item"><i class="fas fa-plus"></i>Create</div>
                    <div class="navbar-item"><i class="fas fa-user"></i>User</div>
                </div>
            </div>
        </nav>
        <div class="create-collection-container">
            <div class="user-container">
                <div class="ava-user">
                    <img src="../image/76612223_2552870551600596_4013557095986102272_n.jpg" alt="">
                </div>
                <div class="infor-user">
                    <p>Name: Pham Duc Thang</p>
                    <p>Chuc vu: Hoc sinh</p>
                    <p>Bo the: 5</p>
                    <p>Tong so the: 10</p>
                </div>
    
            </div>
            <div class="main-collection-card">
                <div class="title">
                    <h3 style="font-size:40px">Danh sách chủ đề</h3>
                    <h4>Bạn nên tạo các bộ thẻ từ mới theo chủ đề sẽ giúp bạn ghi nhớ lâu hơn</h4>
                </div>
                <div class="">
                </div>
                </div>
            
            </div>
        </div>
    </div>
`;
components.loginScreen = `
<div class="container">
    <nav>
        <div class="nav-bar-container">
            <div class="logo">
              ECARD
            </div>
            <div class="list-main-navbar">
              <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
              <div class="navbar-item"><i class="fas fa-plus"></i>Create</div>
              <div class="navbar-item"><i class="fas fa-user-circle"></i>User</div>
            </div>
        </div>
    </nav>
</div>
      <div class="form-container">
        <form id="form-login">
        <div class="input-wrapper">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email">
        <div class="error" id="error-email"></div>
    </div>
    <div class="input-wrapper">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password">
        <div class="error" id="error-password"></div>
    </div>
    <div class="submit-wrapper">
        <div>Don't have an account ? <span class="cursor-pointer"id="redirect-to-register">Register</span></div>
        <button class = "btn"type='submit'>Sign in</button>
    </div>
        </form>
      </div>
    </div>
`;
components.registerScreen = `
<div class="container">
    <nav>
        <div class="nav-bar-container">
            <div class="logo">
              ECARD
            </div>
            <div class="list-main-navbar">
              <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
              <div class="navbar-item"><i class="fas fa-plus"></i>Create</div>
              <div class="navbar-item"><i class="fas fa-user-circle"></i>User</div>
            </div>
        </div>
    </nav>
</div>
      <div class="form-container">
      <form id="form-register">
      <div class="name-wrapper">
          <div class="input-wrapper">
              <input type="text" name="firstName" placeholder="First Name...">
              <div class="error" id="error-first-name"></div>
          </div>
          <div class="input-wrapper">
              <input type="text" name="lastName" placeholder="Last Name...">
              <div class="error" id="error-last-name"></div>
          </div>
      </div>
      <div class="input-wrapper">
          <input type="text" name="email" placeholder="Email">
          <div class="error" id="error-email"></div>
      </div>
      <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password">
          <div class="error" id="error-password"></div>
      </div>
      <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="Confirm Password">
          <div class="error" id="error-confirm-password"></div>
      </div>
      <div class="submit-wrapper">
          <div>Already have an account ? <span class="cursor-pointer"id="redirect-to-login">Login</span></div>
          <button class = "btn"type='submit' id = 'loginChatPage'> Register</button>
      </div>
  </form>
      </div>
    </div>
`;
