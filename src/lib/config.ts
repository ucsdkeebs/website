const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_KEEBS_API_URL,
    endpoints: {
      user: {
        createUser: "/users/create-user",
        login: "/users/verify",
        getUser: "/users/get-users",
        deleteUser: "/users/delete-user",
      },
      event: {
        createEvent: "/events/create",
        getEvents: "/events/all"
      }
    },
  },
};

export default config;
