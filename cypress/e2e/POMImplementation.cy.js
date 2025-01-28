import Loginvalidation from '../PageObject/Loginvalidation';

describe('Add2Cart_Session Validation', function() {
  const Loginval = new Loginvalidation();

  it('LaunchURL', () => {
    Loginval.URLNavigation_Login();
  });

  it('Invalid User Login', () => {
    Loginval.Invaliduser_Login();
  });

  it('Invalid Password Login', () => {
    Loginval.Invalidpwd_Login();
  });

  it('Valid Login', () => {
    Loginval.valid_Login();
  });

  it("valid login using Keyboard", () =>{
    Loginval.valid_Login_Keyboard()
  })
});

