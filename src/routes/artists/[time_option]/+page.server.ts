export async function load({ params }) {
  interface ArtistData {
    [key: string]: number;
  }
  const time_option = params.time_option || 'day'; // Default to 'day' if no time option provided
    const url = `https://diesiback.haroldpoi.repl.co/topartists/${time_option}`; // Replace with your Flask server URL
    const response = await fetch(url);
    const artistData : ArtistData = await response.json();
    // console.log(artistData)
    return { props: { artistData, time_option } };
  }
  