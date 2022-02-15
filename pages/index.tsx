import Head from 'next/head';
import { getEvents } from 'lib/queries';
import { TEvent } from 'types/event.types';

type eventProps = {
  events: TEvent[]
}

export default function Home(props: eventProps) {
  const { events } = props;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HTN Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>Hello!</h1>
        <div>
          {
            events.map((event) => (
              <p key={event.id}>{event.name}</p>
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
