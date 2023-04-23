export async function load({ params }) {
    const time_option = params.time_option || 'day'; // Default to 'day' if no time option provided
    const url = `https://diesiback.haroldpoi.repl.co/topsongs/${time_option}`; // Replace with your Flask server URL
    const response = await fetch(url);
    const songs = await response.json();
    // console.log(songs)
    return { props: { songs, time_option } };
  }
  