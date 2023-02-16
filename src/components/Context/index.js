import { createContext, useEffect, useState } from 'react';
import { getUser } from '../Queries';

const Context = createContext(DataProvider);

function DataProvider(props) {
  const [dataState, setDataState] = useState('');

  /* useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODI5NjQ5MTksInVzZXJOYW1lIjoiYWRtaW41IiwiZU1haWwiOiJhZG1pbjVAbWFpbC5jb20iLCJwZXJzb25JZCI6Mzk3MjkyODEsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTg5NzY4OSwiZXhwIjoxNjc1OTg0MDg5fQ.SonFRbsxUof-nR8ARzqjzM0st7HDAJML47cxBbQCnWY';

    const conf = {
      method: 'get',
      route: 'user/82964919',
      token,
    };

    Promise.all([getUser(conf)])
    .then((data) => {
      setDataState(data[0][0]);
    })
  }, []); */

  return (
    <Context.Provider value={{
      dataState,
    }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, DataProvider };
