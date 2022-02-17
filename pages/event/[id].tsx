import { TEvent } from 'types/event.types';
import { formatAMPM } from 'utils/date';
import { ExternalLinkIcon, UserIcon, BackIcon } from 'components/Icons';
import { getEvent } from 'lib/queries';
import React, { useState, useEffect } from 'react';
import styles from 'components/EventCard.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface EventProps {
  event: TEvent;
}

export default function EventPage(props: EventProps) {
  const { event } = props;
  const startDate = new Date(event.start_time);
  const endDate = new Date(event.end_time);
  const eventTypeDisplay = { workshop: 'Workshop', activity: 'Activity', tech_talk: 'Tech Talk' };

  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  // const endDate = new Date(event.end_time);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const isloggedIn = localStorage.getItem('htnLoggedIn');
    if (isloggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex flex-col w-full p-6 space-y-4">
      <div className="h-24" />
      <button type="button" onClick={() => router.back()} className="hover:text-gray-500 dark:hover:text-gray-400">
        <BackIcon />
      </button>
      <div className="flex flex-col p-6 bg-gray-200 dark:bg-gray-600 rounded-lg space-y-6">
        <div className="flex flex-row space-x-2">
          <div className="heading">
            {event.name}
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className={styles.time}>
            {startDate.toDateString()}
            {' '}
            {formatAMPM(startDate)}
            {' '}
            to
            {' '}
            {endDate.toDateString()}
            {' '}
            {formatAMPM(endDate)}
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="title">
            {eventTypeDisplay[event.event_type]}
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <div className="regular">
            {event.description}
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          {
              loggedIn === true
                && (
                  <a
                    href={event.private_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="linkButton">
                      Join&nbsp;
                      <ExternalLinkIcon />
                    </button>
                  </a>

                )
            }
          {
              (loggedIn === false && event.public_url)
                  && (
                  <a
                    href={event.public_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="linkButton">
                      Join&nbsp;
                      <ExternalLinkIcon />
                    </button>
                  </a>
                  )
            }
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row space-x-2 items-center">
            {
            event.speakers.map((speaker) => (
              <React.Fragment key={speaker.name}>
                <p className="font-semibold text-xl">
                  Speaker
                  {event.speakers.length > 1 ? 's' : ''}
                  :
                </p>
                {
                  speaker.profile_pic
                    ? (<img src={speaker.profile_pic} alt="speaker" className="rounded-full w-10 h-10 bg-red-100" />)
                    : (<UserIcon className="w-10 h-10" />)
                }
                <p className="text-xl">
                  {speaker.name}
                </p>
              </React.Fragment>
            ))
          }
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center space-x-2 ">
            <div className="title">
              Related Events:
            </div>
            {
                event.related_events.map((id) => (
                  <Link key={id} href={`/event/${id}`}>
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-center p-1 w-8 h-8">
                      { id }
                    </button>
                  </Link>

                ))
              }
          </div>
        </div>

      </div>

    </div>
  );
}

export async function getServerSideProps(context : any) {
  let event = {};
  const { id } = context.query;
  try {
    event = await getEvent(id as string);
  } catch (err: any) {
    console.log(err.message);
  }
  return {
    props: {
      event,
    },
  };
}
