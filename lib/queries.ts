/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';
import client from './apollo-client';

export const getEvents = async () => {
  const response = await client.query({
    query: gql`
      query {
        sampleEvents {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
          speakers {
            name
            profile_pic
          }
          public_url
          private_url
          related_events
        }
      }`,

  });
  return response.data?.sampleEvents;
};

export const getEvent = async (id: string) => {
  const idNum: number = +id;
  const response = await client.query({
    query: gql`
      query {
        sampleEvent (id: ${idNum}) {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
          speakers {
            name
            profile_pic
          }
          public_url
          private_url
          related_events
        }
      }`,
  });
  return response.data?.sampleEvent;
};
