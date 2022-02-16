// import { useState } from 'react';

import React from 'react';
import { TEvent } from 'types/event.types';
import { formatAMPM } from 'utils/date';
import { ExternalLinkIcon, ArrowsExpandIcon, UserIcon } from 'components/Icons';
import Link from 'next/link';
import styles from './EventCard.module.css';

type EventCardProps = {
  event: TEvent;
  loggedIn: boolean;
}
export default function EventCard(props : EventCardProps) {
  const { event, loggedIn } = props;
  const startDate = new Date(event.start_time);
  const endDate = new Date(event.end_time);
  const eventTypeDisplay = { workshop: 'Workshop', activity: 'Activity', tech_talk: 'Tech Talk' };
  return (
    <div className={`${styles.eventCard} dark:bg-gray-900`}>
      <div className={styles.eventGlance}>
        <div className={styles.date}>
          {startDate.toDateString()}
        </div>
        <div className={styles.time}>
          {formatAMPM(startDate)}
          {' '}
          -
          {' '}
          {formatAMPM(endDate)}
        </div>
        <div className="absolute top-4 left-4 subtitle md:visible invisible w-5">
          {eventTypeDisplay[event.event_type]}
        </div>
      </div>

      <div className={styles.eventBody}>
        <div className="heading">
          {event.name}
        </div>
        <p className="text-ellipsis overflow-hidden regular">
          {event.description?.substring(0, 200)}
          ...
        </p>
        <div className="flex flex-col absolute bottom-4 space-y-2">
          <div className="flex flex-row space-x-2 items-center md:visible invisible">
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
            <div>
              <Link href={`/event/${event.id}`}>
                <button type="button" className="linkButton">
                  Details&nbsp;
                  <ArrowsExpandIcon />
                </button>
              </Link>
            </div>
            {
              event.related_events.length > 0
            && (
            <div className="flex flex-row items-center space-x-2 ml-auto md:visible invisible">
              <div className="title">
                Related Events:
              </div>
              {
                event.related_events.map((id) => (
                  <Link key={id} href={`/event/${id}`}>
                    <button type="button" className="bg-blue-600 text-white rounded-full text-center p-1 w-8 h-8">
                      { id }
                    </button>
                  </Link>

                ))
              }
            </div>
            )

            }
          </div>

        </div>
      </div>

    </div>
  );
}
