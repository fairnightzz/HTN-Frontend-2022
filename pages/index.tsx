import Head from 'next/head';
import { getEvents } from 'lib/queries';
import { TEvent } from 'types/event.types';
import { useState } from 'react';
import { SearchIcon } from 'components/Icons';

import EventCard from 'components/EventCard';

type eventProps = {
  events: TEvent[]
}

export default function Home(props: eventProps) {
  const { events } = props;
  const [filteredEvents, setFilteredEvents] = useState(events);

  const setFilter = () => {
    setFilteredEvents(events);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HTN Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="h-24" />
        <div className="relative">
          <input type="search" className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none" />
          <SearchIcon className="text-gray-600 absolute right-0 top-0 mt-2 mr-2" />
        </div>
        <div className="relative flex flex-row w-full justify-center">
          <div className="h-16 items-center">
            Filter
          </div>
          <div className="flex flex-row absolute right-12 inset-y-0 items-center">
            <div className="title">
              Sort By:
            </div>
            <select className="p-2 m-2 h-10 w-24 border rounded-md">
              <option value="Most recent">Hi</option>
              <option value="hi">Hi</option>
            </select>

          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          {
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          }
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://zhehaizhang.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Zhehai Zhang
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  let events = [];
  try {
    events = await getEvents();
  } catch (err: any) {
    console.log(err.message);
  }
  return {
    props: {
      events,
    },
  };
}
