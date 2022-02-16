import Head from 'next/head';
import { getEvents } from 'lib/queries';
import { TEvent } from 'types/event.types';
import { TUserFilters, TSortType, TEventFilter } from 'types/settings.types';
import React, { useState, useEffect } from 'react';
import { SearchIcon } from 'components/Icons';

import EventCard from 'components/EventCard';

type eventProps = {
  events: TEvent[]
}

export default function Home(props: eventProps) {
  const { events } = props;
  const [filteredEvents, setFilteredEvents] = useState(events);
  const eventTypes = ['workshop', 'activity', 'tech_talk'];
  const eventTypeDisplay = ['Workshop', 'Activity', 'Tech Talk'];
  const sortTypes = ['Most Recent', 'Alphabetical', 'First'];
  const [loggedIn, setLoggedIn] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');

  const defaultFilters = {
    sort: 'Most Recent',
    filters: [false, false, false],
  };

  const [filters, setFilters] = useState(defaultFilters);

  const updateFilters = (newFilterSettings: Partial<TUserFilters>) => {
    const newFilters = { ...filters, ...newFilterSettings };
    setFilters(newFilters);

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('htnFilters', JSON.stringify(newFilters));
    }
  };

  const applyFilter = (userFilters: TUserFilters, query: string|null = null) => {
    let sQuery = query;
    if (query === null) {
      sQuery = searchQuery;
    }
    const filter = new RegExp(sQuery as string, 'i');
    let newFilteredEvents = events.filter((el) => el.name.match(filter));

    // Logged in filter
    newFilteredEvents = newFilteredEvents.filter((el) => {
      if (!loggedIn && el.permission && el.permission === 'private') {
        return false;
      }
      return true;
    });

    // Apply Filters
    let appliedFilters = 0;
    for (let i = 0; i < userFilters.filters.length; i += 1) {
      if (userFilters.filters[i]) {
        appliedFilters += 1;
      }
    }
    if (appliedFilters !== 0) {
      newFilteredEvents = newFilteredEvents.filter((el) => {
        for (let i = 0; i < eventTypes.length; i += 1) {
          if (userFilters.filters[i] === true && el.event_type === eventTypes[i]) {
            return true;
          }
        }
        return false;
      });
    }
    // Apply sorting
    if (userFilters.sort === 'Most Recent') {
      newFilteredEvents = newFilteredEvents.sort((a, b) => {
        if (a.start_time === b.start_time) {
          return ((a.end_time < b.end_time) ? 1 : -1);
        }
        return ((a.start_time < b.start_time) ? 1 : -1);
      });
    } else if (userFilters.sort === 'First') {
      newFilteredEvents = newFilteredEvents.sort((a, b) => {
        if (a.start_time === b.start_time) {
          return ((a.end_time > b.end_time) ? 1 : -1);
        }
        return ((a.start_time > b.start_time) ? 1 : -1);
      });
    } else if (userFilters.sort === 'Alphabetical') {
      newFilteredEvents = newFilteredEvents.sort((a, b) => ((a.name > b.name) ? 1 : -1));
    }

    setFilteredEvents(newFilteredEvents);
  };

  // eslint-disable-next-line no-undef
  const updateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Update
    updateFilters({ sort: event.currentTarget.value as TSortType });
    const newFilters = { ...filters, ...{ sort: event.currentTarget.value as TSortType } };
    applyFilter(newFilters as TUserFilters);
  };

  const updateEventFilter = (type: number) => {
    const eventFilters: TEventFilter = filters.filters as TEventFilter;
    // Update selection
    eventFilters[type] = !eventFilters[type];

    // Update the persistence setting
    updateFilters({ filters: eventFilters });

    // Update event
    const newFilters = { ...filters, ...{ filters: eventFilters } };
    applyFilter(newFilters as TUserFilters);
  };

  const handleSearch = (query : string) => {
    setSearchQuery(query);

    applyFilter(filters as TUserFilters, query);
  };

  // eslint-disable-next-line no-undef
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  useEffect(() => {
    let userFilters : TUserFilters = {
      sort: 'Most Recent',
      filters: [false, false, false],
    };
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const savedFilters = localStorage.getItem('htnFilters');
      if (savedFilters) {
        try {
          const parsedFilters: Partial<TUserFilters> = JSON.parse(savedFilters);
          userFilters = { ...userFilters, ...parsedFilters };
        } catch (err) {
          console.log('persisted filters not found');
        }
      }
      // eslint-disable-next-line no-undef
      const isloggedIn = localStorage.getItem('htnLoggedIn');
      if (isloggedIn === 'true') {
        setLoggedIn(true);
      }
    }

    setFilters(userFilters);
    applyFilter(userFilters, null);
  }, [loggedIn]);

  return (
    <div className="">
      <Head>
        <title>HTN Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center">
        <div className="h-24" />
        <div className="relative">
          <input type="search" onChange={onSearch} className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none" />
          <SearchIcon className="absolute right-0 top-0 mt-2 mr-2" />
        </div>
        <div className="relative flex flex-col lg:flex-row w-full justify-center my-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 px-4 overflow-hidden">
            <div className="title">
              Filters:
            </div>
            {
              eventTypeDisplay.map((eventType, index) => (
                <label className="flex items-center justify-center" htmlFor={eventType} key={eventType}>
                  <input checked={filters.filters[index]} onChange={() => updateEventFilter(index)} className="mr-2 leading-right " type="checkbox" id={eventType} />
                  <span className="title">
                    {eventType}
                  </span>

                </label>

              ))
            }

          </div>
          <div className="flex flex-row lg:absolute lg:right-12 lg:inset-y-0 items-center justify-center">
            <div className="title">
              Sort By:
            </div>
            <select onChange={updateSort} value={filters.sort} className="p-2 m-2 h-10 w-48 border rounded-md dark:bg-gray-800">
              {
                sortTypes.map((sortType) => (
                  <option value={sortType} key={sortType}>{sortType}</option>
                ))
              }
            </select>

          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          {
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} loggedIn={loggedIn} />
            ))
          }
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bottom-0">
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
