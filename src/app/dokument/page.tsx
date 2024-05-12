import { BlogTemplate } from "../components/blogTemplate";

const Dokument = () => {
  return (
    <BlogTemplate
      date="2024-05-09"
      title="Dokument"
      img="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <p>
        Välkommen till vår sida för viktiga dokument. Här har vi samlat allt
        material som är relevant för dig som medlem i vår förening. Vi strävar
        efter att hålla denna sida uppdaterad med den senaste informationen för
        att du enkelt ska kunna ta del av den när du behöver. Tveka inte att
        kontakta styrelsen om du har några frågor eller om du behöver hjälp med
        att hitta ett specifikt dokument.
      </p>

      <div>
        <h3 className="font-semibold mb-3">Årsredovisning 2023</h3>
        <p>
          Här kan du ta del av vår senaste årsredovisning, som innehåller
          detaljerad information om föreningens ekonomi och verksamhet under det
          föregående året. Dokumentet är tillgängligt för nedladdning.
          <br />
          Klicka på knappen nedan för att ladda hem den.
        </p>

        <div className="mt-3">
          <a
            href="/Årsredovisning Brf Nebulosan 9_ 2023.pdf"
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-base"
          >
            Ladda ner
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Stadgar 2023</h3>
        <p>
          Här hittar du de aktuella stadgarna för vår förening. Dessa dokument
          är avgörande för att förstå regler och rutiner som styr vår gemensamma
          förvaltning och medlemsbeteende. Stadgarna uppdateras regelbundet för
          att reflektera eventuella ändringar eller beslut som tagits av
          föreningen.
          <br />
          Klicka på knappen nedan för att ladda hem den.
        </p>

        <div className="mt-3">
          <a
            href="/Stadgar Brf Nebulosan 9_2023.pdf"
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-base"
          >
            Ladda ner
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Renovering</h3>
        <p>
          Denna PDF innehåller omfattande information och vägledning för
          medlemmar som planerar att genomföra renoveringar i sina lägenheter.
          Dokumentet täcker allt från nödvändiga tillstånd från styrelsen till
          detaljerade regler och riktlinjer som måste följas. Det inkluderar
          också information om störningstider och ansvarsområden för
          bostadsrättsinnehavare under renoveringsprocessen. Klicka på knappen
          nedan för att ladda hem dokumentet och se till att din renovering
          följer föreningens bestämmelser.
        </p>

        <div className="mt-3">
          <a
            href="/Renovering Nebulosan 9.pdf"
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-base"
          >
            Ladda ner
          </a>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default Dokument;
