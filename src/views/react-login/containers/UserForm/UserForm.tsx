import React, { FC, useState } from 'react';
//style
import { UserFormDiv } from '../../style';
//components
import CardSignIn from '../../components/CardSignIn';
import CardSignUp from '../../components/CardSignUp';

const UserForm: FC = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  return (
    <UserFormDiv>
      <CardSignIn hasAccount={hasAccount} setHasAccount={setHasAccount} />
      <CardSignUp hasAccount={hasAccount} setHasAccount={setHasAccount} />
    </UserFormDiv>
  );
};

export default UserForm;
