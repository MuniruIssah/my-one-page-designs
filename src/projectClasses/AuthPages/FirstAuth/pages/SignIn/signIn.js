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
import { useHistory, useRouteMatch } from "react-router-dom";

const SignIn = ({ brands }) => {
  return (
    <FirstAuthFormWrapper>
      <SignInForm brands={brands} />
    </FirstAuthFormWrapper>
  );
};

export default SignIn;

const SignInForm = ({ brands }) => {
  const history = useHistory();
  const handleGoToSignUp = () => {
    history.push("firstAuth/signUp");
  };
  return (
    <form>
      <span className="formHeader"> Sign In to Our Platform</span>
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
      <FirstAuthCheckWithLink
        label="Remember me"
        linkText="Lost Password?"
        link="#"
      />
      <FirstAuthButton title="Sign In" />

      <TextAndLink text="or login with" />
      <BrandStrip brands={brands} />
      <TextAndLink
        text="Not Registered?"
        link="Create Account"
        onClick={handleGoToSignUp}
      />
    </form>
  );
};
