import { BlogTemplate } from "../components/blogTemplate";

const Trivsel = () => {
  return (
    <BlogTemplate
      date="2024-05-12"
      title="För allas trivsel"
      img="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <p>
        Denna sida är dedikerad till att främja en harmonisk och välkomnande
        miljö i vår bostadsrättsförening. Här finner du riktlinjer och tips på
        hur vi tillsammans kan bidra till en positiv atmosfär där alla känner
        sig hemma. Vi värdesätter respekt, hänsyn och samarbete mellan alla
        medlemmar för att säkerställa att vår gemenskap trivs och frodas.
      </p>

      {/* <div>
        <h3 className="font-semibold mb-3"> 2024-05-14: Vårstädning</h3>
        <p>
          Välkommen till vår gemensamma vårstädning 2023! Detta är ett utmärkt
          tillfälle för oss alla att tillsammans fräscha upp våra gemensamma
          ytor och göra vårt område fint och välkomnande inför sommaren. Vi
          samlas 18:00 på gården, och all nödvändig städutrustning kommer att
          tillhandahållas. Efter att vi gjort vårt område fint avslutar vi dagen
          med lite grillning och dryck.
        </p>
      </div> */}
    </BlogTemplate>
  );
};

export default Trivsel;
