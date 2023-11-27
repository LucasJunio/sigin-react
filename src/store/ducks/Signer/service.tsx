// import { api } from "../../../services";

const signinPost = async (body: any) => {
  let join: any = `${body.email}:${body.password}`;
  let encodedBody = btoa(join);

  // const res = api.post('/auth',{},{ headers: {
  //   Authorization: "Basic " + encodedBody,
  //   "X-Esmt-Application": "application",
  // }});

  const res = { token: "token" };

  return res;
};

export { signinPost };
