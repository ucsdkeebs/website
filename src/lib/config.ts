const isServer = typeof window === 'undefined';

const config = {
  api: {
    baseUrl: isServer
      ? process.env.SERVER_KEEBS_API_URL || "http://localhost:5000/api"
      : process.env.NEXT_PUBLIC_KEEBS_API_URL || "https://ucsdkeebs.com/api",
    endpoints: {
      user: {
        createUser: "/users/create-user",
        login: "/users/verify",
        getUser: "/users/get-users",
        deleteUser: "/users/delete-user",
      },
      event: {
        createEvent: "/events/create-event",
        getEvents: "/events/all",
        rsvp: "/events/",
        getUserTickets: "/events/get-user-tickets"
      },
      ticket: {
        checkinTicket: "/tickets/check-in",
        getAllTickets: "/tickets/all",
        getUserTicket: "/tickets/"
      },
      ticketTailor: {
        updateWinner: "/ticketTailor/update-winner",
        getCheckedIn: "/ticketTailor/get-checked-in",
        getCheckedInNoWin: "/ticketTailor/get-checked-in-no-win",
        getCheckedInByRaffleSlot: "/ticketTailor/get-checked-in-by-raffle"
      },
      ticketTailorWebhook: { //dont think i need this since its only called by outside the website   
      }
    },
  },
};

export default config;
