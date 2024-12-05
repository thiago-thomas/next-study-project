type Ticket = {
  id: number
  title: string
  body: string
  priority: string
  user_email: string
};

export default async function Page() {
  //Fetching data in next
  let data = await fetch("http://localhost:4000/tickets", {
    cache: 'force-cache'        //Activating cache in next 15
  })
  let tickets = await data.json()

  return (
    <div>
      {tickets.map((ticket: Ticket) => (
        <div className="p-4 bg-slate-600 m-2 text-white" key={ticket.id}>
          <h4 className="text-xl">{ticket.title}</h4>
          <p className="text-lg py-2">{ticket.body}</p>
          <span className="block">priority: {ticket.priority}</span>
          <span className="block">email: {ticket.user_email}</span>
        </div>
      ))}
    </div>
  );
}
