<script lang="ts">
    import { onMount } from 'svelte';
    import type { SvelteComponent } from 'svelte';
  
    interface ArtistData {
      [key: string]: number;
    }
  
    // let artistData: ArtistData = {"ΧΑΡΟΥΛΗΣ Γ": 2118, "ΑΛΕΞΙΟΥ Χ": 2063, "ΜΠΟΦΙΛΙΟΥ Ν": 1863, "ΚΟΤΣΙΡΑΣ Γ": 1639, "ΜΗΤΡΟΠΑΝΟΣ Δ": 1523, "ΖΟΥΓΑΝΕΛΗ Ε": 1490, "ΠΑΠΑΚΩΝΣΤΑΝΤΙΝΟΥ Β": 1360, "ΑΡΒΑΝΙΤΑΚΗ Ε": 1345, "ΙΩΑΝΝΙΔΗΣ Α": 1181, "ΑΦΟΙ ΚΑΤΣΙΜΙΧΑ": 1046, "ΚΑΤΣΙΜΙΧΑΣ Π": 957, "ΚΑΤΣΙΜΙΧΑΣ Χ": 957, "ΡΙΖΟΥ Μ": 951, "ΜΟΥΖΟΥΡΑΚΗΣ Π": 876, "ΜΑΛΑΜΑΣ Σ": 779, "ΜΑΧΑΙΡΙΤΣΑΣ Λ": 762, "ΝΙΦΟΡΑΤΟΣ ΣΤΑΥΡΟΣ": 634, "ΔΕΛΗΒΟΡΙΑΣ Φ": 631, "ΠΑΣΧΑΛΙΔΗΣ Μ": 584, "ΣΤΟΚΑΣ Μ": 577, "ΝΕΓΚΑ Γ": 542, "ΜΟΡΦΗ Ρ": 499, "ΣΚΟΥΛΑΣ Β": 494, "ΠΛΙΑΤΣΙΚΑΣ Φ": 472, "ΧΑΤΖΗΓΙΑΝΝΗΣ Μ": 445, "ΚΑΝΑ Μ": 440, "ΠΥΞ ΛΑΞ": 419, "ΝΤΑΛΑΡΑΣ Γ": 415, "ΘΗΒΑΙΟΣ Χ": 411, "ΠΕΡΙΔΗΣ Ο": 407, "ΣΑΒΒΟΠΟΥΛΟΣ Δ": 396, "ΝΙΝΑ ΜΑΖΑΝΗ": 387, "ΠΑΠΑΖΟΓΛΟΥ Ν": 387, "ΖΙΩΓΑΛΑΣ Ν": 380, "ΜΠΑΛΤΑΤΖΗ Π": 372, "ΠΟΡΤΟΚΑΛΟΓΛΟΥ Ν": 369, "ΑΓΓΕΛΑΚΑΣ Γ": 359, "ΤΡΥΠΕΣ": 358, "ΓΑΛΑΝΗ Δ": 356, "ΤΣΑΛΙΓΟΠΟΥΛΟΥ Ε": 349, "ΜΑΡΑΒΕΓΙΑΣ Κ": 333, "ΞΥΛΟΥΡΗΣ Ν": 321, "ΘΑΛΑΣΣΙΝΟΣ Π": 317, "ΠΑΛΑΜΙΔΑΣ Γ": 275, "ΒΗΤΑ Κ": 275, "POKO": 273, "ΛΙΔΑΚΗΣ Μ": 242, "R.E.M.": 231, "ΣΙΟΛΑΣ Σ": 217, "BUBLE MICHAEL": 207, "ΠΡΩΤΟΨΑΛΤΗ Α": 198, "ΚΑΡΑΜΟΥΡΑΤΙΔΗΣ Θ": 196, " ΒΕΛΕΣΙΩΤΟΥ Φ": 195, "IMAM BAILDI": 193, "ΔΡΑΚΟΣ Ε": 188, "MINOR PROJECT": 188, "ΖΕΡΒΟΥΔΑΚΗΣ Δ": 185, "BEATLES": 177, "ΛΕΙΒΑΔΑΣ Κ": 176, "QUEEN": 174, "BONNIE TYLER": 173, "AEROSMITH": 173, "ROLLING STONES": 172, "ΠΑΠΑΚΩΝΣΤΑΝΤΙΝΟΥ Θ": 170, "GADJO DILO": 169, "ADELE": 166, "METALLICA": 162, "LOCOMONDO": 160, "ΒΕΛΕΣΙΩΤΟΥ Φ": 158, "ΚΑΖΟΥΛΗΣ Β": 158, "ΤΡΙΦΩΝΟ": 156, "ΓΛΥΚΕΡΙΑ": 156, "ΜΟΥΤΣΑΤΣΟΥ Α": 154, "ΡΕΜΠΟΥΤΣΙΚΑ Ε": 154, "ΜΠΑΜΠΑΛΗ Α": 153, "BRYAN ADAMS": 148, "PALYRRIA": 148, "ΚΡΑΟΥΝΑΚΗΣ Σ": 145, "MAGGIE REILLY": 142, "ΠΑΠΑΓΕΩΡΓΙΟΥ Μ": 134, "MONSIER MINIMAL": 130, "U2": 125, "NIRVANA": 125, "ZAZ": 114, "ΣΑΤΤΗ ΜΑΡΙΝΑ": 101, "PINK FLOYD": 95, "NILSSON": 95, "FLORENCE AND THE MACHINE": 95, "ΚΑΝΕΛΛΙΔΟΥ Α": 94, "ΤΣΑΚΝΗΣ Δ": 94, "ΒΙΤΑΛΗ Ε": 94, "ΤΟΥΡΝΑΣ Κ": 94, "ΣΙΔΗΡΟΠΟΥΛΟΣ Π": 93, "AVRIL LAVIGNE": 93, "DEAN MARTIN": 93, "ΜΗΤΣΙΑΣ Μ": 93, "ΘΕΟΔΩΡΑΚΗΣ Μ": 93, "YANN TIERSEN": 93, "ΜΑΤΣΑΣ Μ": 92, "PAUL WELLER": 92, "2002 GR": 92, "ΚΟΡΚΟΛΗΣ ΣΤ": 92, "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ Κ": 92, "LOUIS ARMSTRONG": 92, "ΠΑΠΑΔΟΠΟΥΛΟΣ Λ": 91, "ΜΠΕΛΛΟΥ Σ": 91, "STYX": 91, "Yann Tiersen": 91, "LONDON JULIE": 91, "MIKE OLDFIELD": 90, "DALE DICK & THE DEL-TONES": 90, "MATTHEW FISHER": 90, "ΑΡΛΕΤΑ": 90, "RIGHTEOUS BROTHERS": 90, "ANIMALS": 90, "ΠΑΠΑΖΟΓΛΟΥ ΝΙΚΟΣ": 90, "ΣΚΟΥΛΑΣ": 89, "POLICE": 89, "PUFF DADDY": 89, "HOZIER": 89, "IMANY": 89, "FRANK & NANCY SINATRA": 89, "YOUSS OU N'DOUR/NENEH CHERRY": 88, "BARBRA STREISAND": 88, "NINA SIMONE": 88, "NICKELBACK": 88, "ΠΑΝΑΓΟΠΟΥΛΟΣ Δ": 88, "DOORS": 88, "OASIS": 88, "CLASH": 88, "TOTO": 87, "MR. BIG": 87, "RAG N' BONE": 87, "RAINBOW": 87, "KANSAS": 87, "ΛΟΪΖΟΣ Μ": 86, "ELVIS PRESLEY": 86, "HOOTERS": 86, "ΠΟΥΛΟΠΟΥΛΟΣ Γ": 86, "CARS": 86, "BLONDIE": 86, "CRANBERRIES": 86, "PERCY SLEDGE": 86, "RUSH J.": 85, "Kaleo": 85, "BILL WITHERS": 85, "STEVE MILLER BAND": 85, "EURYTHMICS": 85, "SIMON & GARFUNKEL": 85, "DAMIEN RICE": 84, "MARK RONSON feat. MILEY CYRUS": 84, "HARRY STYLES": 84, "JAMES": 84, "DIDO": 84, "JOHN LENNON": 84, "THE WEEKND": 84, "REAMONN": 84, "FRANK SINATRA": 84, "EAGLE EYE CHERRY": 83, "RICHARD MARX": 83, "CHARLES RAY": 83, "ROXETTE": 83, "BLUE": 82, "ELTON JOHN": 82, "IGGY POP": 78, "RED HOT CHILI PEPPERS": 77, "ΚΑΛΗΜΕΡΗ": 70, "ΥΦΑΝΤΗΣ": 70, "ΔΗΜΗΤΡΙΑΔΗΣ Γ": 69, "ΚΙΚΙΔΗ ΤΑΝΙΑ": 69, "ΔΗΜΟΥ Ε": 66, "ΜΑΡΘΑ ΦΡΙΝΤΖΗΛΑ": 65, "CARDIGANS": 60, "TINA TURNER": 60, "ΒΟΥΤΣΙΚΑΚΗΣ Θ": 59, "JOAN JETT AND THE BLACKHEARTS": 59, "MADONNA": 56, "MILEY CYRUS": 56, "KISS": 51, "STING": 50, "ΜΠΛΕ": 50, "ΤΣΑΤΣΟΥ Θ": 46, "ΕΚΕΙΝΟΣ \\ ΕΚΕΙΝΟΣ": 43, "ΚΟΡΓΙΑΛΑΣ Δ": 42, "RONETTES": 42, "ΥΠΟΓΕΙΑ ΡΕΥΜΑΤΑ": 40, "ΒΟΥΛΓΑΡΑΚΗ Π": 40, "PINK MARTINI": 39, "Miley Cyrus": 38, "ΤΣΑΚΑΛΟΣ Ο": 38, "CROSBY BING & THE ANDREWS SISTERS": 37, "ΑΣΙΜΟΣ ΝΙΚΟΛΑΣ": 37, "LENNON J": 37, "ΒΟΣΣΟΥ Σ": 33, "PRETENDERS": 33, "ΜΑΚΕΔΟΝΑΣ Κ": 32, "UB40": 31, "ΠΕΡΡΗΣ Γ": 31, "ΓΙΟΚΑΡΙΝΗΣ Γ": 30, "COOLIO": 30, "SIMONE NINA": 29, "TANITA TIKARAM": 28, "ΙΟΥΛΙΑ ΚΑΡΑΠΑΤΑΚΗ": 22, "ΜΗΤΡΟΠΑΝΟΣ ΔΗΜΗΤΡΗΣ": 21, "CONNELLS": 18, "Depeche Mode": 18, "MEG MYERS": 17, "ΞΥΛΙΝΑ ΣΠΑΘΙΑ": 17, "ΚΑΡΑΔΗΜΟΣ Γ": 13, "ΤΖΩΡΤΖΙΑ": 12, "ΠΑΥΛΙΔΗΣ Π": 10, "ΝΤΟΜΕΝΙΚΑ": 9, "ΟΝΑΡ": 8, "ΠΕΝΥ ΡΑΜΑΝΤΑΝΗ": 8, "ΔΡΟΓΩΣΗΣ Σ": 8, "ΧΑΤΖΙΔΑΚΙΣ ΜΑΝΟΣ": 7, "ΡΟΥΣ (ΓΙΩΡΓΟΣ ΓΕΩΡΓΙΑΔΗΣ)": 7, "ΦΑΤΜΕ": 6, "ΠΑΥΛΙΔΗΣ Π & B-MOVIES": 6, " & B-MOVIES": 6, "LADY GAGA": 6, "BRADLEY COOPER": 6, "ΗΜΙΣΚΟΥΜΠΡΙΑ": 5, "ΕΛΠΙΔΑ": 5, "NYMAN MICHAEL": 4, "ΓΙΑΝΝΗΣ ΧΑΡΟΥΛΗΣ": 4, "ΓΑΛΑΝΗ ΔΗΜΗΤΡΑ": 4, "DULCE PONTES": 3, "PAVLOV'S DOG": 3, "EVANESCENCE": 3, "BACALOV LUIS": 3, "ΚΑΡΑΛΗΣ ΚΩΣΤΑΣ": 3, "CONCRETE BLONDE": 3, "Ludovico Einaudi": 3, "ΤΣΑΝΑΚΛΙΔΟΥ Τ": 3, "ΦΑΜΕΛΛΟΣ Μ": 3, "MOBY": 3, "ΣΥΝΗΘΕΙΣ ΥΠΟΠΤΟΙ": 2, "NEW YORK ROCK AND ROLL ENSEMPLE": 2, "ΡΑΣΟΥΛΗΣ Μ": 2, "BIRDY": 2, "LILA DOWNS": 2, "ΞΥΛΟΥΡΗΣ ΝΙΚΟΣ": 2, "MADREDEUS": 2, "CASAL LUZ": 2, "ΓΑΡΓΑΝΟΥΡΑΚΗΣ ΧΑΡΑΛΑΜΠΟΣ": 2, "VELOSO CAETANO": 2, "DOWNS LILA": 2, "ΧΑΡΟΥΛΗΣ Γ ΜΠΟΦΙΛΙΟΥ Ν ΖΟΥΓΑΝΕΛΗ Ε ΜΑΡΑΒΕΓΙΑΣ Κ": 2, "ΗΡΩ": 2, "JEFFERSON AIRPLANE": 2, "ΟΡΧΗΣΤΡΙΚΟ": 2, "NO DOUBT": 2, "SHIVAREE": 2, "ΚΑΝΝΕΛΙΔΟΥ Α": 2, "ΜΟΣΧΟΛΙΟΥ Β": 2, "ΔΗΜΗΤΡΗΣ ΜΗΤΣΟΤΑΚΗΣ feat. ΓΙΑΝΝΗΣ ΧΑΡΟΥΛΗΣ": 2, "4 NON BLONDES": 2, "ΜΑΚΕΔΟΝΑΣ ΚΩΣΤΑΣ": 2, "CAVE NICK & THE BAD SEEDS": 2, "ENYA": 2, "STEWART DAVE": 1, "ΛΑΪΚΕΔΕΛΙΚΑ": 1, "Ο.Ρ.Α.": 1, "ΑΛΕΞΙΟΥ Χ": 1, "3 DOORS DOWN": 1, "ΑΛΕΞΙΟΥ ΧΑΡΙΣ": 1, "CAVE NICK & MINOGUE KYLIE": 1, "CARDONE NATALIE": 1, "OSBORNE JOAN": 1, "ΙΩΑΝΝΙΔΗΣ ΑΛΚΙΝΟΟΣ": 1, "ΠΑΣΠΑΛΑ Ε": 1, "DYLAN BOB": 1, "BEIRUT": 1, "SINEAD O'CONNOR": 1, "ORBISON ROY": 1, "ΜΙΚΡΕΣ ΠΕΡΙΠΛΑΝΗΣΕΙΣ": 1, "GARBAGE": 1, "SAM BROWN": 1, "STEVENS CAT": 1, "FAITHFULL MARIANNE": 1, "BARCLAY JAMES HARVEST'": 1, "COLDPLAY": 1, "ΝΤΑΝΤΩΝΑΚΗ Φ": 1, "DR. JOHN": 1, "ΠΑΝΟΥΣΗΣ ΤΖΙΜΗΣ": 1, "ΚΟΥΜΙΩΤΗ ΡΕΝΑ": 1, "EAGLES": 1, "MANIC STREET PREACHERS": 1, "VAYA CON DIOS": 1, "GOLDENTHAL ELLIOT": 1, "10000 MANIACS": 1, "KELLY CLARKSON": 1, "IRENE CARA": 1, "NATALIE IMBRUGLIA": 1, "SIA": 1, "AMY WHINEHOUSE": 1, "FUGEES": 1, "AMY MCDONALD": 1, "ΜΠΑΣΗΣ Δ": 1, "DULFER CANDY": 1}
    let artistData : ArtistData= {};
    const url = 'https://diesiback.haroldpoi.repl.co/topartists';
  
    onMount(async () => {
      const response = await fetch(url);
      artistData = await response.json();
      console.log(artistData);
    });
  
    function sortedArtists(data: ArtistData): string[] {
      return Object.keys(data).sort((a, b) => data[b] - data[a]);
    }
  </script>
  
  <style>
    .bar {
      display: inline-block;
      height: 20px;
      background-color: blue;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  </style>
  
  <div>
    <h3>Top Artists leme</h3>
    {#each sortedArtists(artistData) as artist (artist)}
      <div>
        <div
          class="bar"
          style="width: {Math.round((artistData[artist] / 1665) * 100)}%"
        ></div>
        {artist} ({artistData[artist]})
      </div>
    {/each}
  </div>
  