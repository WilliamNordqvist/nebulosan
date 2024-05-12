import { BlogTemplate } from "../components/blogTemplate";

const Datum = () => {
  return (
    <BlogTemplate
      date="2024-05-12"
      title="Viktiga Datum"
      img="https://images.unsplash.com/photo-1608228079968-c7681afb8f1d?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <p>
        Denna sida tillhandahåller en sammanställning av alla viktiga datum för
        vår bostadsrättsförening. Informationen här kommer att uppdateras
        regelbundet för att säkerställa att du alltid har tillgång till de
        senaste och mest relevanta datumen.
      </p>

      <div>
        <h3 className="font-semibold mb-3"> 2024-05-14: Vårstädning</h3>
        <p>
          Välkommen till vår gemensamma vårstädning 2023! Detta är ett utmärkt
          tillfälle för oss alla att tillsammans fräscha upp våra gemensamma
          ytor och göra vårt område fint och välkomnande inför sommaren. Vi
          samlas 18:00 på gården, och all nödvändig städutrustning kommer att
          tillhandahållas. Efter att vi gjort vårt område fint avslutar vi dagen
          med lite grillning och dryck.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-3"> 2024-05-14: Stämma</h3>
        <p>
          Välkommen till årets stämma som kommer att äga rum direkt efter vår
          gemensamma vårstädning! Stämman är ett viktigt tillfälle för alla
          medlemmar att delta i diskussioner och beslut som formar vår förening.
          Efter vårstädningen möts vi för att gå igenom året som gått och
          planera för framtiden. Det är också tillfället att välja
          styrelsemedlemmar och rösta om viktiga frågor. Vi ser fram emot din
          närvaro för att tillsammans bidra till föreningens välbefinnande.
        </p>
      </div>
    </BlogTemplate>
  );
};

export default Datum;
