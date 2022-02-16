// import { useState } from 'react';

import React from 'react';
import { TEvent } from 'types/event.types';
import { formatAMPM } from 'utils/date';
import { ExternalLinkIcon, ArrowsExpandIcon } from 'components/Icons';
import Link from 'next/link';
import styles from './EventCard.module.css';

type EventCardProps = {
  event: TEvent;
}
export default function EventCard(props : EventCardProps) {
  const { event } = props;
  const startDate = new Date(event.start_time);
  // const endDate = new Date(event.end_time)
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventGlance}>
        <div className={styles.date}>
          {startDate.toDateString()}
        </div>
        <div className={styles.date}>
          {formatAMPM(startDate)}
        </div>
        <div className="absolute top-4 left-4 subtitle">
          {event.event_type}
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
          <div className="flex flex-row space-x-2 items-center">
            {
            event.speakers.map((speaker) => (
              <>
                <p className="font-semibold">
                  Speaker
                  {event.speakers.length > 1 ? 's' : ''}
                  :
                </p>
                {
                  speaker.profile_pic
                  && <img key={speaker.name} src={speaker.profile_pic} alt="speaker" className="rounded-full w-6 h-6 bg-red-100" />
                }
                <p className="regular">
                  {speaker.name}
                </p>
              </>
            ))
          }
          </div>
          <div className="flex flex-row space-x-2">
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
            <div>
              <Link href={`/event/${event.id}`}>
                <button type="button" className="linkButton">
                  Details&nbsp;
                  <ArrowsExpandIcon />
                </button>
              </Link>
            </div>
            <div className="flex flex-row">
              Related Events:
              {
                event.related_events.map((id) => (
                  <div>
                    { id }
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
