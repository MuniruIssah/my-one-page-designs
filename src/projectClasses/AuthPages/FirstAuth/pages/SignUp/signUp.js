import React from "react";
import BrandStrip from "../../components/BrandStrip/brandStrip";
import { FirstAuthButton } from "../../components/Button/button";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FirstAuthCheck,
  FirstAuthCheckWithLink,
} from "../../components/Check/firstAuthCheck";
import FirstAuthFormWrapper from "../../components/FirstAuthWrapper/firstAuthWrapper";
import InputField from "../../components/InputField/inputField";
import TextAndLink from "../../components/TextAndLink/textAndLink";
import { useHistory } from "react-router-dom";

const SignUp = ({ brands }) => {
  return (
    <FirstAuthFormWrapper>
      <SignUpForm brands={brands} />
    </FirstAuthFormWrapper>
  );
};

export default SignUp;

const SignUpForm = ({ brands }) => {
  const history=useHistory()
  const handleGoToLogin=()=>{
    history.push('/firstAuth');
  }
  return (
    <form>
      <span className="formHeader"> Create an Account</span>
      <InputField
        type="email"
        icon={faEnvelope}
        placeholder="example@company.com"
        label="Your Email"
      />
      <InputField
        type="password"
        icon={faUnlockAlt}
        placeholder="Password"
        label="Your Password"
      />
      <InputField
        type="password"
        icon={faUnlockAlt}
        placeholder="Password"
        label="Confirm Password"
      />
      <FirstAuthCheck label="I agree to the terms and conditions" />
      <FirstAuthButton title="Sign Up" />
      <TextAndLink text='or'/>
      <BrandStrip brands={brands} />
      <TextAndLink text="Already Have An Account?" link="Login here" onClick={handleGoToLogin} />
    </form>
  );
};
