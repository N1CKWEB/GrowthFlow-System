// src/App.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";



function Login() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getLeads();
  }, []);

  async function getLeads() {
    const { data, error } = await supabase.from("leads").select();
    if (error) console.error(error);
    else setLeads(data);
  }

  return (
    <div>
      <h1>Leads Capturados</h1>
      <ul>
        {leads.map((lead:any) => (
          <li key={lead.id}>
            {lead.username} - {lead.email || "No email"} - {lead.telefono || "No teléfono"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Login;
