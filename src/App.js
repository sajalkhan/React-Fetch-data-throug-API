import { Suspense, useState, useEffect } from "react";


const SuspensefulUserProfile = ({ userId }) => {
  const [datalist, setData] = useState({});


  useEffect(() => {

    (async () => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      let responseData = await response.json();
      setData({ datalist: responseData });
    })();

    return () => {
      setData({});
    }

  }, [userId]);

  return (
    <Suspense>
      <UserProfile data={datalist} />
    </Suspense>
  );
};
const UserProfile = ({ data }) => {

  return (
    <>
      <h1>{data.datalist?.name}</h1>
      <h2>{data.datalist?.email}</h2>
    </>
  );
};
const UserProfileList = () => (
  <>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>
);

export default UserProfileList;