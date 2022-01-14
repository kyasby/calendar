import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}`;
};

function App() {
  return (
    <div>
      <FullCalendar plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    locales={allLocales}
                    locale="ja"
                    contentHeight="auto"
        eventColor="#f00"
        eventBackgroundColor="fff"
        eventTextColor="black"
        events={[
          { title: "👦", date: `${thisMonth()}-01`, color: "gray"},
          { title: "予測:1000人", date: `${thisMonth()}-01`, color: "gray", display: "background"},
          { title: "👦👦👦", date: `${thisMonth()}-02`, color: "red"},
          { title: "予測:10000人", date: `${thisMonth()}-02`, color: "red", display: "background"},
          { title: "👦👦", date: `${thisMonth()}-03`, color: "orange"},
          { title: "予測:5000人", date: `${thisMonth()}-03`, color: "orange", display: "background"},
          { title: "👦👦👦", date: `${thisMonth()}-04`, color: "red"},
          { title: "予測:9000人", date: `${thisMonth()}-04`, color: "red", display: "background"},
        ]}
      />
    </div>
  );
}

export default App;
